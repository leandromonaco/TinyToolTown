---
name: "Sensei"
tagline: "AI-powered skill frontmatter compliance improver for GitHub Copilot CLI and Claude Code 🥋"
author: "Shayne Boyer"
author_github: "spboyer"
github_url: "https://github.com/spboyer/sensei"
tags: ["cli", "ai", "copilot", "claude-code", "skills"]
language: "TypeScript"
license: "MIT"
theme: "terminal"
date_added: "2026-04-15"
featured: false
---

Sensei automates the improvement of Agent Skills frontmatter compliance using the Ralph loop pattern — iteratively refining skills until they reach Medium-High compliance with all tests passing. Works with both GitHub Copilot CLI and Claude Code.

It solves the "skill collision" problem where AI agents invoke the wrong skill for a given prompt because of missing triggers, vague descriptions, or token bloat. Sensei reads your skill, scores its compliance, improves the frontmatter with proper trigger phrases, runs tests, checks token budgets, and repeats until the skill is properly optimized.

Built it because managing dozens of agent skills manually was painful — Sensei does the tedious compliance work so you can focus on building delightful skills. It even includes GEPA evolutionary optimization for deep automated improvements. 🧬