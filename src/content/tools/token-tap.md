---
name: "Token-Tap"
tagline: "Token-Tap is a local spend meter for AI coding tools."
author: "Robert Evans"
author_github: "robertev-ronin"
github_url: "https://github.com/robertev-ronin/token-tap"
thumbnail: "/thumbnails/token-tap.webp"
website_url: "https://github.com/robertev-ronin/token-tap"
tags: ["ai", "token tracking", "cost monitoring", "developer tools", "cli"]
language: "csharp"
license: "MIT"
date_added: "2026-05-02"
featured: false
ai_summary: "Keep your AI coding tool spending in check with this nifty local meter that tracks token usage and costs while respecting your privacy—perfect for avoiding surprise bills and staying savvy with your AI budget!"
ai_features: ["🔥 Supports multiple AI tools and log formats", "⚡ Tracks token use and estimated costs locally", "🎯 Exports detailed reports in CSV/XLSX", "🚀 Publishes live spend metrics to Windows Performance Counters for real-time monitoring"]
---

Token-Tap keeps an eye on your AI coding tools before they quietly turn into a mortgage payment.

It watches or imports Codex, GitHub Copilot, VS Code, OpenAI-style logs, Anthropic-style logs, CSV files, and plain text logs. Then it estimates token usage and cost, stores summarized history in SQLite, exports clean reports, and can trigger simple alerts when spending wanders past your comfort zone.

For Windows users, it can also publish live token-spend metrics to Performance Counters, so existing monitoring tools can track AI burn just like CPU, memory, or whatever’s left of mine.

The delightful part: instead of discovering later that your AI agent spent the afternoon eating premium tokens like popcorn, Token-Tap can nudge you early — like getting a warning before your college kid’s credit card bill arrives.