---
name: ttt-triage
description: Triage new tool submissions for Tiny Tool Town. Reviews open GitHub issues in shanselman/TinyToolTown, evaluates each tool against acceptance criteria, and helps approve/reject/request-changes. Use this skill when asked to triage, review submissions, or check new tools for TTT.
---

# Tiny Tool Town Triage Skill

Triage new tool submissions for [Tiny Tool Town](https://tinytooltown.com) — a community directory of free, open-source tiny tools.

## When to Use

Invoke this skill when asked to:

- Triage new issues / submissions
- Review tool submissions
- Approve or reject tools
- Check what new tools are pending

## Triage Workflow

### Step 1: Fetch Open Issues

```powershell
gh issue list --repo shanselman/TinyToolTown --state open --label new-tool --json number,title,body,labels,createdAt --limit 50
```

Or use the GitHub MCP `list_issues` tool with `state: OPEN` on `shanselman/TinyToolTown`.

### Step 2: Evaluate Each Submission

For each issue, assess against all of these criteria and assign a confidence level.

### Step 3: Present Triage Table

Output a markdown table with: issue #, tool name, language, license, confidence (HIGH/MEDIUM/LOW), recommendation (APPROVE/REJECT/MAYBE), and notes.

### Step 4: Act on Decisions

After the user confirms:

- **APPROVE**: Label issue with `queued-import` (**not** `approved` — `batch-approve.yml` drains the queue)
- **REJECT**: Close with a polite comment explaining why
- **MAYBE**: Comment asking for the missing information

## Acceptance Criteria

### Approve if all of these are true:

1. **Open source** — Has a recognized open-source license (MIT, Apache 2.0, GPL, ISC, BSD, etc.)
2. **Repo is public and accessible** — Not a 404, not archived
3. **It's actually tiny** — Single-purpose, small, focused tool; not a full platform or suite
4. **It's fun, useful, or delightful** — TTT celebrates small, joyful tools
5. **Not enterprise/commercial** — No SaaS, no paid tiers, no enterprise features
6. **Has a README** — Should explain what the tool does
7. **Checklist is complete** — All boxes checked in the submission form

### Reject if any of these are true:

1. **No license** — Repo has no LICENSE file and submitter didn't specify one
2. **Dead repo** — 404, archived, or clearly abandoned
3. **Enterprise/commercial tool** — Paid SaaS, enterprise pricing, or "free tier" of a commercial product
4. **Not a tiny tool** — Full platform, framework, or suite
5. **Spam or low effort** — Empty repo, no code, or clearly auto-generated submission
6. **Duplicate** — Tool already exists on the site

### Maybe / Request Changes if:

1. **License unclear** — Repo exists but no LICENSE file; ask them to add one
2. **Borderline scope** — Could be tiny or could be too big; use judgment
3. **CC BY-NC or similar** — Non-commercial restriction is acceptable but worth flagging
4. **Repo looks new/empty** — Very few commits, might not be ready yet

## Confidence Levels

- **HIGH** — Clear-cut decision, all criteria met or clearly violated
- **MEDIUM** — Mostly clear but one minor concern
- **LOW** — Significant uncertainty or borderline fit

## Automated Labels

The submission workflow may add:

- `repo-verified`
- `has-license`
- `has-readme`
- `has-image`

Missing `has-image` is non-blocking.

## Important Operational Notes

### GitHub Auth

```powershell
gh auth switch -u shanselman
```

### Approval Queue

**Never label issues with `approved` directly.** Always use `queued-import`.
The `batch-approve.yml` workflow is the sole writer and drains the queue.

### Follow-up Comments

Before making a final decision, check whether the submitter recently commented that they added a license, fixed the repo, or uploaded an image.

### Rejection Comments

Be kind and specific:

```text
Hey @username! Thanks for submitting [tool name] to Tiny Tool Town! 👋

Unfortunately, we can't add this one because [specific reason].

[If fixable]: If you [add a license / trim it down / etc.], feel free to resubmit!

Thanks for thinking of us!
```

### Checking for Duplicates

```powershell
Get-ChildItem src/content/tools/*.md | Select-String -Pattern "github_url.*owner/repo"
```

## Triage Report Format

```md
## Recommend APPROVE (N tools)
| # | Tool | Language | Confidence | Notes |
|---|------|----------|------------|-------|
| 123 | ToolName | Python | HIGH | Brief reason |

## Maybe / Needs Info (N tools)
| # | Tool | Concern |
|---|------|---------|
| 456 | ToolName | What's needed |

## Recommend REJECT (N tools)
| # | Tool | Reason |
|---|------|--------|
| 789 | ToolName | Why it doesn't fit |
```

## Post-Triage

After approvals are queued, optionally trigger the batch workflow:

```powershell
gh workflow run batch-approve.yml --repo shanselman/TinyToolTown
```
