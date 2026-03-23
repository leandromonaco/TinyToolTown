---
name: "Prompt Book"
tagline: "Native desktop viewer for your AI coding sessions across Claude Code, Copilot CLI, and Codex CLI"
author: "Andrew Massart"
author_github: "andrewmassart"
github_url: "https://github.com/andrewmassart/prompt-book"
thumbnail: "/thumbnails/prompt-book.png"
tags: ["tauri", "react", "ai", "developer-tools", "desktop"]
language: "Rust"
license: "MIT"
theme: "neon"
date_added: "2026-03-23"
featured: false
---

Prompt Book finds and displays session transcripts from Claude Code, GitHub Copilot CLI, and OpenAI Codex CLI in one interface. Each session gets syntax-highlighted code blocks, collapsible tool calls with duration metrics, thinking blocks, token usage breakdowns, and git context. You can also drag and drop any .jsonl file or export sessions as shareable HTML.

I built it because I wanted to revisit past AI coding sessions without digging through raw JSONL files scattered across three different tools. It's about 4,000 lines of Rust and React on Tauri v2. Small binary, fast startup, no Electron.