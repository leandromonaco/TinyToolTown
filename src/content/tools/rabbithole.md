---
name: "Rabbithole"
tagline: "A beautiful TUI for consuming and inspecting RabbitMQ messages"
author: "Emilio Palmerini"
author_github: "emiliopalmerini"
github_url: "https://github.com/emiliopalmerini/rabbithole"
thumbnail: "/thumbnails/rabbithole.webp"
tags: ["cli", "tui", "rabbitmq", "developer-tools"]
language: "GO"
license: "MIT"
date_added: "2026-02-13"
featured: false
ai_summary: "Dive down the rabbit hole of your RabbitMQ queues with this gorgeous terminal UI that lets you browse, consume, and inspect messages in real-time — complete with automatic Protobuf decoding that just works."
ai_features: ["🐰 Interactive topology browser for exchanges and bindings", "🔄 Real-time message streaming with pause/resume and split-pane view", "🔍 Auto-detects and decodes Protobuf messages from routing keys", "💾 SQLite persistence with full-text search across session history"]
---

*rabbithole* is a terminal UI for consuming and inspecting `RabbitMQ` messages in real time. It features a topology browser for exploring exchanges and bindings, a split-pane consumer view with vim-style navigation, dynamic protobuf decoding that auto-detects message types from routing keys, and optional SQLite persistence for saving message history across sessions. Built with Bubble Tea and designed for developers who live in the terminal.