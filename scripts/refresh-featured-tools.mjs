#!/usr/bin/env node
import { appendFileSync, existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const TOOLS_DIR = join(ROOT, 'src', 'content', 'tools');
const STAR_CACHE_PATH = join(ROOT, 'src', 'data', 'star-counts.json');
const CONFIG_PATH = join(ROOT, '.github', 'featured-tools-config.json');
const HISTORY_PATH = join(ROOT, '.github', 'featured-history.json');

const DEFAULT_CONFIG = {
  count: 8,
  recentSlots: 2,
  recentDays: 21,
  cooldownDays: 56,
  maxPerLanguage: 2,
  maxPerPrimaryTag: 2,
  pinnedSlugs: [],
};

function loadJson(path, fallback) {
  try {
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch {
    return fallback;
  }
}

function saveJson(path, value) {
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`);
}

function getFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  return match ? match[1] : '';
}

function getField(frontmatter, key) {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  return match ? match[1].trim() : '';
}

function unquote(value) {
  return (value || '').replace(/^['"]|['"]$/g, '').trim();
}

function parseTags(raw) {
  const value = (raw || '').trim();
  if (!value) return [];

  if (value.startsWith('[') && value.endsWith(']')) {
    try {
      return JSON.parse(value.replace(/'/g, '"'));
    } catch {
      return value
        .slice(1, -1)
        .split(',')
        .map((tag) => unquote(tag))
        .filter(Boolean);
    }
  }

  return value.split(',').map((tag) => unquote(tag)).filter(Boolean);
}

function getGitHubRepo(url) {
  if (!url) return null;

  try {
    const parsed = new URL(url);
    if (!['github.com', 'www.github.com'].includes(parsed.hostname)) return null;

    const segments = parsed.pathname.split('/').filter(Boolean);
    if (segments.length < 2) return null;

    return `${segments[0]}/${segments[1].replace(/\.git$/, '')}`;
  } catch {
    return null;
  }
}

function daysSince(isoDate) {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return Number.POSITIVE_INFINITY;
  return Math.floor((Date.now() - date.getTime()) / 86400000);
}

function scoreTool(tool, history, config, pinnedSet) {
  let score = 0;
  const reasons = [];

  if (pinnedSet.has(tool.slug)) {
    score += 1000;
    reasons.push('pinned');
  }

  if (tool.featured) {
    score += 12;
    reasons.push('current featured');
  }

  if (tool.thumbnail) {
    score += 35;
    reasons.push('thumbnail');
  }

  if (tool.aiSummary) {
    score += 5;
  }

  const ageDays = daysSince(tool.dateAdded);
  if (ageDays <= 14) {
    score += 30;
    reasons.push('fresh');
  } else if (ageDays <= 45) {
    score += 20;
    reasons.push('recent');
  } else if (ageDays <= 120) {
    score += 10;
  }

  if (tool.stars > 0) {
    const starScore = Math.min(30, Math.round(Math.log10(tool.stars + 1) * 12));
    score += starScore;
    reasons.push(`${tool.stars} stars`);
  }

  const lastFeaturedAt = history.lastFeatured?.[tool.slug];
  if (lastFeaturedAt) {
    const days = daysSince(lastFeaturedAt);
    if (days < config.cooldownDays) {
      const penalty = Math.round((config.cooldownDays - days) * 1.5) + 20;
      score -= penalty;
      reasons.push(`cooldown ${days}d`);
    }
  }

  return { score, reasons };
}

function updateFeaturedFlag(content, desired) {
  if (/^featured:\s*(true|false)\s*$/m.test(content)) {
    return content.replace(/^featured:\s*(true|false)\s*$/m, `featured: ${desired}`);
  }

  if (/^date_added:.*$/m.test(content)) {
    return content.replace(/^date_added:.*$/m, `$&\nfeatured: ${desired}`);
  }

  return content;
}

function summarizeSelection(selected) {
  const lines = [
    '## Weekly Featured Tools',
    '',
    ...selected.map((tool, index) => (
      `${index + 1}. **${tool.name}** (\`${tool.slug}\`) - score ${tool.score} (${tool.reasons.join(', ') || 'base'})`
    )),
    '',
  ];

  const summary = lines.join('\n');
  console.log(summary);

  if (process.env.GITHUB_STEP_SUMMARY) {
    appendFileSync(process.env.GITHUB_STEP_SUMMARY, `${summary}\n`);
  }
}

function main() {
  const config = { ...DEFAULT_CONFIG, ...loadJson(CONFIG_PATH, {}) };
  const history = loadJson(HISTORY_PATH, {
    lastRun: null,
    selectedSlugs: [],
    lastFeatured: {},
  });
  const stars = loadJson(STAR_CACHE_PATH, {});
  const pinnedSet = new Set((config.pinnedSlugs || []).map((slug) => slug.toLowerCase()));

  const tools = readdirSync(TOOLS_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const fullPath = join(TOOLS_DIR, file);
      const content = readFileSync(fullPath, 'utf8');
      const frontmatter = getFrontmatter(content);
      const slug = basename(file, '.md').toLowerCase();
      const githubUrl = unquote(getField(frontmatter, 'github_url'));
      const repo = getGitHubRepo(githubUrl);
      const starEntry = repo ? stars[repo] : null;
      const { score, reasons } = scoreTool({
        slug,
        featured: /^featured:\s*true\s*$/m.test(frontmatter),
        thumbnail: unquote(getField(frontmatter, 'thumbnail')),
        aiSummary: unquote(getField(frontmatter, 'ai_summary')),
        dateAdded: unquote(getField(frontmatter, 'date_added')),
        stars: starEntry?.stars ?? 0,
      }, history, config, pinnedSet);

      return {
        slug,
        file,
        fullPath,
        content,
        frontmatter,
        name: unquote(getField(frontmatter, 'name')) || slug,
        language: unquote(getField(frontmatter, 'language')).toLowerCase(),
        primaryTag: (parseTags(getField(frontmatter, 'tags'))[0] || '').toLowerCase(),
        featured: /^featured:\s*true\s*$/m.test(frontmatter),
        thumbnail: unquote(getField(frontmatter, 'thumbnail')),
        dateAdded: unquote(getField(frontmatter, 'date_added')),
        githubUrl,
        stars: starEntry?.stars ?? 0,
        score,
        reasons,
      };
    })
    .filter((tool) => tool.githubUrl);

  const bySlug = new Map(tools.map((tool) => [tool.slug, tool]));
  const selected = [];
  const selectedSlugs = new Set();
  const languageCounts = new Map();
  const tagCounts = new Map();

  const addTool = (tool) => {
    if (!tool || selectedSlugs.has(tool.slug)) return;

    selected.push(tool);
    selectedSlugs.add(tool.slug);

    if (tool.language) {
      languageCounts.set(tool.language, (languageCounts.get(tool.language) || 0) + 1);
    }

    if (tool.primaryTag) {
      tagCounts.set(tool.primaryTag, (tagCounts.get(tool.primaryTag) || 0) + 1);
    }
  };

  for (const slug of config.pinnedSlugs || []) {
    const tool = bySlug.get(slug.toLowerCase());
    if (tool) addTool(tool);
  }

  const ranked = [...tools].sort((a, b) => (
    b.score - a.score
      || new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
      || a.name.localeCompare(b.name)
  ));

  const recentCandidates = [...tools]
    .filter((tool) => daysSince(tool.dateAdded) <= config.recentDays)
    .sort((a, b) => (
      new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
        || (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
        || (b.thumbnail ? 1 : 0) - (a.thumbnail ? 1 : 0)
        || b.score - a.score
        || a.name.localeCompare(b.name)
    ));

  for (let pass = 0; pass < 2 && selected.length < Math.min(config.count, config.recentSlots); pass++) {
    for (const tool of recentCandidates) {
      if (selected.length >= Math.min(config.count, config.recentSlots) || selectedSlugs.has(tool.slug)) continue;

      const languageOk = !tool.language || (languageCounts.get(tool.language) || 0) < config.maxPerLanguage;
      const tagOk = !tool.primaryTag || (tagCounts.get(tool.primaryTag) || 0) < config.maxPerPrimaryTag;

      if (pass === 0 && (!languageOk || !tagOk)) continue;
      addTool(tool);
    }
  }

  for (let pass = 0; pass < 2 && selected.length < config.count; pass++) {
    for (const tool of ranked) {
      if (selected.length >= config.count || selectedSlugs.has(tool.slug)) continue;

      const languageOk = !tool.language || (languageCounts.get(tool.language) || 0) < config.maxPerLanguage;
      const tagOk = !tool.primaryTag || (tagCounts.get(tool.primaryTag) || 0) < config.maxPerPrimaryTag;

      if (pass === 0 && (!languageOk || !tagOk)) continue;
      addTool(tool);
    }
  }

  if (selected.length === 0) {
    throw new Error('No tools were selected for featuring.');
  }

  const desiredSet = new Set(selected.map((tool) => tool.slug));
  let changedFiles = 0;

  for (const tool of tools) {
    const desired = desiredSet.has(tool.slug);
    if (tool.featured === desired) continue;

    const updated = updateFeaturedFlag(tool.content, desired);
    if (updated !== tool.content) {
      writeFileSync(tool.fullPath, updated);
      changedFiles++;
    }
  }

  const today = new Date().toISOString().slice(0, 10);
  const updatedHistory = {
    lastRun: today,
    selectedSlugs: selected.map((tool) => tool.slug),
    lastFeatured: { ...(history.lastFeatured || {}) },
  };

  for (const tool of selected) {
    updatedHistory.lastFeatured[tool.slug] = today;
  }

  saveJson(HISTORY_PATH, updatedHistory);

  summarizeSelection(selected);
  console.log(`Updated ${changedFiles} tool file(s). History written to ${existsSync(HISTORY_PATH) ? '.github/featured-history.json' : HISTORY_PATH}.`);
}

main();
