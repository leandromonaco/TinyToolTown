---
name: "AI Trailers"
tagline: "Capture AI coding tool prompts as standard git trailers in commit messages. Supports Claude Code, Kiro, Gemini, and Codex."
author: "Eslam Hamouda"
author_github: "eslamx7"
github_url: "https://github.com/EslaMx7/ai-trailers"
tags: ["cli", "git", "claude", "code", "ai"]
language: "TypeScript"
license: "MIT"
date_added: "2026-04-08"
featured: false
---

Every time you write a prompt in Claude Code, you're making a choice. What to build, how to approach it, what matters most. Those choices shape the code just as much as the code itself.

But after the session ends, all of that disappears into a transcript file. A week later, you look at the git log and have no idea what you actually asked Claude to do.

I think those decisions belong in the commit. Right next to the code they produced.

So I built ai-trailers. It uses Claude Code's `UserPromptSubmit` hook to capture every prompt and embed it as a standard git trailer.

```
fix: resolve auth redirect loop

AI-Tool: Claude Code
AI-Prompt: fix the login redirect loop when session expires
```

Setup is one command: `bunx ai-trailers init`

Also works with Kiro, Gemini CLI, and Codex if you jump between tools. The idea is one central record of human intent, living in git history where it belongs.