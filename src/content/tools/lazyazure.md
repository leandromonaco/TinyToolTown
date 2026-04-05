---
name: "lazyazure"
tagline: "The lazy way of viewing your Azure resources. TUI for drilling down into Azure subscriptions, resource groups and resources."
author: "Mats Estensen"
author_github: "matsest"
github_url: "https://github.com/matsest/lazyazure"
thumbnail: "/thumbnails/lazyazure.gif"
tags: ["cli", "tui", "azure", "terminal", "golang"]
language: "Go"
license: "MIT"
theme: "terminal"
date_added: "2026-03-31"
featured: false
ai_summary: "Dive into your Azure resources with this slick terminal UI that makes browsing subscriptions, resource groups, and resources as easy as pie — all without leaving your keyboard! It’s like having a magic portal to Azure that fits right in your terminal window."
ai_features: ["🔥 Full resource hierarchy navigation from subscriptions to resources", "⚡ Multiple authentication methods including Azure CLI and managed identities", "🎯 Rich detail views with color-coded summaries and syntax-highlighted JSON", "🖱️ Keyboard and mouse support with real-time search and portal link integration"]
---

Inspired by [lazydocker](https://github.com/jesseduffield/lazydocker) I made a TUI for quickly browsing through the Azure resource hierarchy from the terminal.

It's quick, simple, re-uses your existing auth (e.g. Azure CLI or Azure PowerShell) and also features a copy portal url to clipboard-feature to go from terminal to portal when it's needed. Written in Go.

It's built as a exercise to learn more about building a TUI for my part and to have something that's useful when working a lot in the terminal (e.g. with a coding agent) instead of constantly navigating through the Azure Portal.