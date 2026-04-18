---
name: "Prompt Book"
tagline: "Native desktop viewer for your AI coding sessions across Claude Code, Copilot CLI, and Codex CLI"
author: "Andrew Massart"
author_github: "andrewmassart"
github_url: "https://github.com/andrewmassart/prompt-book"
thumbnail: "/thumbnails/prompt-book.webp"
tags: ["tauri", "react", "ai", "developer-tools", "desktop"]
language: "Rust"
license: "MIT"
theme: "neon"
date_added: "2026-03-23"
featured: false
ai_summary: "Dive into your AI coding adventures with a sleek desktop viewer that unifies all your session transcripts into one neat, interactive hub — making it a breeze to explore, analyze, and share your AI-assisted code stories!"
ai_features: ["🔥 Multi-platform parsing for Claude Code Copilot CLI and Codex CLI", "⚡ Collapsible messages tool calls and thinking blocks for easy browsing", "🎯 Detailed session metadata including token usage and git info", "💾 One-click export to self-contained HTML files for sharing or archiving"]
---

Prompt Book finds and displays session transcripts from Claude Code, GitHub Copilot CLI, and OpenAI Codex CLI in one interface. Each session gets syntax-highlighted code blocks, collapsible tool calls with duration metrics, thinking blocks, token usage breakdowns, and git context. You can also drag and drop any .jsonl file or export sessions as shareable HTML.

I built it because I wanted to revisit past AI coding sessions without digging through raw JSONL files scattered across three different tools. It's about 4,000 lines of Rust and React on Tauri v2. Small binary, fast startup, no Electron.