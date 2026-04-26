---
name: "ping-sweep"
tagline: "Fast .NET network ping sweeper with live TUI and CLI modes"
author: "Michael Lakerveld"
author_github: "lakerfield"
github_url: "https://github.com/Lakerfield/Lakerfield.PingSweep"
thumbnail: "/thumbnails/ping-sweep.webp"
website_url: "https://www.nuget.org/packages/Lakerfield.PingSweep"
tags: ["cli", "network", "ping", "windows", "mac"]
language: "C#"
license: "MIT"
theme: "terminal"
date_added: "2026-04-26"
featured: false
ai_summary: "Zip through your network like a digital ninja with this speedy .NET ping sweeper that offers both a slick live text UI and a no-nonsense command line mode for instant host discovery!"
ai_features: ["🚀 Lightning-fast network sweeps", "🖥️ Live interactive TUI mode", "🧰 Convenient CLI mode with CIDR and dash range support", "🎯 Sorted host summary for easy analysis"]
---

ping-sweep is a .NET global tool that discovers online hosts across a network range. Run it without arguments for an interactive TUI, pick your network interface, confirm or edit the range, and watch hosts appear live as they respond. Or pass a range directly for quick non-interactive use. It supports both CIDR `192.168.1.0/24` and dash notation `192.168.1.10-20`, sweeps up to 100 hosts concurrently, and finishes with a sorted summary. I built it because every time I needed to find a device on my local network, I thought: I should build a (tiny) tool for that.