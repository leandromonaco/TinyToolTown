---
name: "my-todo"
tagline: "🚀 A high-performance Rust-based Terminal User Interface (TUI) for managing tasks organized by groups."
author: "Gennaro Riccio"
author_github: "GennaroRiccio"
github_url: "https://github.com/GennaroRiccio/my-todo"
thumbnail: "/thumbnails/my-todo.webp"
tags: ["tui"]
language: "Rust"
license: "MIT"
date_added: "2026-02-16"
featured: false
ai_summary: "Manage your tasks like a pro right from your terminal with a snappy Rust-powered interface that groups, sorts, and colors your to-dos for max clarity and speed. It's like task management with a turbo boost, no mouse required but totally supported!"
ai_features: ["📁 Group tasks logically for neat organization", "🔥 Color-coded priorities with easy cycling", "🔀 Sort and reorder tasks on the fly", "🖱️ Full mouse support with clicks and scrolls"]
---

✨ Features

    📁 Task Groups: Organize your tasks into logical groups.
    📝 Task Details: Tasks have a title, optional description, completion status, and a priority (High/Medium/Low). A details panel shows each task's title, description, and priority.
    🔥 Priorities: Tasks have a priority with colors and symbols (High=Red !, Medium=Yellow •, Low=Green ○) and can be cycled with p.
    🔀 Sorting & Reordering: Tasks can be sorted by Title, Status, or Creation Date and the sort order can be toggled. Use s to cycle sort mode and r to toggle ascending/descending. Use ↑/↓ to move tasks up/down within a group.
    🖱️ Mouse Support: Click groups or tasks to select them and use the mouse wheel to scroll the selection.
    💾 Persistence & Performance: Saves data in the standard user data directory using atomic writes and buffered I/O for integrity and speed.
    🎨 TUI: Built with ratatui and crossterm.