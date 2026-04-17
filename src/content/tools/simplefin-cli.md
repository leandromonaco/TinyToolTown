---
name: "simplefin-cli"
tagline: "Tiny CLI for fetching your bank accounts & transactions via SimpleFin Bridge"
author: "Alfero Chingono"
author_github: "achingono"
github_url: "https://github.com/achingono/simplefin-cli"
tags: ["cli", "finance", "simplefin", "json", "personal-finance"]
language: "TypeScript"
license: "MIT"
date_added: "2026-04-17"
featured: false
---

simplefin-cli is a tiny, no-nonsense command-line client for the SimpleFin Bridge Protocol. Exchange a setup token once, then pipe your real bank accounts and transactions straight into jq, scripts, or spreadsheets as clean JSON. Built because personal finance should be hackable from the terminal — every command emits a predictable { ok: true, ... } / { ok: false, error } envelope, so it plays nicely with any Unix pipeline.