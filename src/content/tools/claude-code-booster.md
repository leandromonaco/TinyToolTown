---
name: "Claude Code Booster"
tagline: "Session manager for parallel Claude Code CLI sessions — groups terminal + VS Code + Visual Studio per git worktree with one-click context switching and restart restore."
author: "Francis Surroca"
author_github: "fsuskate"
github_url: "https://github.com/fsuskate/claude-code-booster"
thumbnail: "/thumbnails/claude-code-booster.webp"
tags: ["claude code cli"]
language: "C#"
license: "MIT"
date_added: "2026-03-16"
featured: false
ai_summary: "Juggling multiple Claude Code CLI sessions just got a whole lot easier with this desktop sidekick that corrals your terminals and IDEs into neat, one-click worktree squads. Say goodbye to window chaos and hello to instant context switching and session restoring magic!"
ai_features: ["🃏 Manage multiple parallel Claude Code CLI sessions by git worktree", "🚀 One-click context switch to focus all windows for a session", "🔄 Restore all terminals and IDEs after restart seamlessly", "🌗 Supports dark and light themes respecting system settings"]
---

A tiny Windows desktop app for developers who run multiple Claude Code CLI sessions in parallel across git worktrees.

 Each session groups a terminal (running claude), VS Code, and Visual Studio around a single worktree. Click "Focus" to bring all three windows to the foreground together. Click "Restore All" after a restart to relaunch everything — terminals resume with claude --resume, IDEs reopen to the right folders.

Built over a weekend to scratch a personal itch: after a Windows restart, it used to take 30+ minutes to reopen 5 sessions worth of terminals, editors, and IDEs in the right directories. Now it takes one click.

What it does:
  - Session cards with live status dots (terminal / VS Code / VS alive or dead)
  - One-click context switching — focus all windows for a session together
  - One-click restore — relaunches everything after a restart
  - Creates git worktrees and opens all apps in one step
  - Minimizes to system tray, dark/light theme

Tech: .NET 9, WinForms + WebView2, no installer, no admin rights — just run it.

Built on: Forked from https://github.com/rogerbarreto/copilot-booster by https://github.com/rogerbarreto. Core services for git worktree management, terminal launching, and Win32 window tracking were adapted from that project. The Copilot-specific features, WinForms UI, and Edge browser support were replaced with Claude Code CLI support and a WebView2 dashboard.





