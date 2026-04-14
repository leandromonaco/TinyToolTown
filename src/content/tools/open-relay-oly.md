---
name: "Open-Relay (oly)"
tagline: "`oly` turns long-running and interactive CLI workflows into persistent, supervised sessions for humans and AI agents. Close the terminal, keep the process alive, get notified when input is needed, and jump back in from anywhere."
author: "Binwen"
author_github: "albertwoo"
github_url: "https://github.com/slaveOftime/open-relay"
website_url: "https://github.com/user-attachments/assets/bd52a474-d9c4-48a7-824b-8df328a9d5a7"
tags: ["cli", "claude code", "copilot", "codex", "opencode"]
language: "Rust"
license: "MIT"
theme: "terminal"
date_added: "2026-04-14"
featured: false
---

> Run interactive CLIs and AI agents like managed services.

`oly` gives long-running terminal jobs a durable home.

Start a command once, detach, close your terminal, come back later, inspect logs, send input only when needed, or reattach and take over. It is built for AI agent workflows, interactive CLIs, and any session you do not want tied to one fragile terminal window.

- **Detach without losing the process.** The daemon owns the session, not your terminal.
- **Stop babysitting prompts.** Watch logs or wait for likely input-needed checkpoints.
- **Intervene surgically.** Send text or keys without attaching.
- **Resume with context.** Reattach and replay buffered output first.
- **Keep an audit trail.** Session output and lifecycle events persist on disk.
- **Control it from more than one place.** Use the CLI, the web UI, or route work to connected nodes.

`oly` is not trying to replace your favorite terminal. It is a supervision layer for long-lived, interactive workloads. A simple CLI proxy.