---
name: "dev-log"
tagline: "A CLI tool to help write and manage weekly developer notes and status."
author: "Pedro Silva"
author_github: "DarthPedro"
github_url: "https://github.com/d20Tek/cli-tools/tree/main/src/D20Tek.Tools.DevLog"
thumbnail: "/thumbnails/dev-log.png"
website_url: "https://d20tek.com/projects/dev-log"
tags: ["weekly", "status", "dev log", "developer log", "dev status"]
language: "C#"
license: "MIT"
theme: "terminal"
date_added: "2026-04-08"
featured: false
---

dev-log is a lightweight .NET global tool built for developers who want a simple, structured way to record what they accomplished each week. Instead of digging through commit history or recall what you did last Tuesday, dev-log gives you a consistent place to capture it as you go.

Logs are saved as plain markdown files organized by week, making them easy to read, share, or check into source control. Whether you're filling out a weekly status report, preparing for a retrospective, or just keeping yourself accountable, dev-log keeps it fast and frictionless.

Installation:
```
dotnet tool install --global dev-log
```