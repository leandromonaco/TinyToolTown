---
name: "ccc — Copilot Config CLI"
tagline: "A beautiful TUI to interactively configure and view GitHub Copilot CLI settings"
author: "Juan Burckhardt"
author_github: "jsburckhardt"
github_url: "https://github.com/jsburckhardt/co-config"
thumbnail: "/thumbnails/ccc-copilot-config-cli.png"
tags: ["cli", "tui", "copilot", "github", "configuration"]
language: "Go"
license: "(Updated) MIT"
theme: "terminal"
date_added: "2026-03-10"
featured: false
ai_summary: "Tired of wrestling with config files for your GitHub Copilot CLI? Dive into this sleek terminal UI that makes tweaking settings a breeze while keeping your secrets safe and sound."
ai_features: ["🎨 Gorgeous terminal UI powered by the Charm stack", "🔍 Auto-detects Copilot CLI version and config keys", "🔒 Masks sensitive tokens for secure viewing", "⚡ Single static Go binary with zero dependencies"]
---

ccc reads your ~/.copilot/config.json, auto-detects the installed Copilot CLI version and available config keys, and presents them in a beautiful terminal UI for editing. Sensitive fields (tokens, credentials) are masked and read-only, so you can safely browse your full config without worry.

Built it because editing Copilot CLI config by hand in JSON is error-prone and you have to know what keys exist for your version. ccc auto-detects the schema and gives you a point-and-click TUI built with the Charm stack (Bubbletea + Lipgloss + Huh). It preserves unknown config fields on save so you never lose data. Ships as a single static Go binary — no runtime dependencies.