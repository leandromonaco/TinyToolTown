---
name: "Broadcast"
tagline: "AI-powered per-app noise suppression for PipeWire on Linux"
author: "Gareth Hubball"
author_github: "londospark"
github_url: "https://github.com/londospark/broadcast"
thumbnail: "/thumbnails/broadcast.webp"
tags: ["linux", "audio", "noise-suppression", "pipewire", "cli"]
language: "Rust"
license: "GPL-3.0-or-later"
theme: "terminal"
date_added: "2026-03-10"
featured: false
ai_summary: "Say goodbye to background noise ruining your calls or streams with this slick AI-powered noise suppressor that lets you pick and choose which apps get the magic treatment—perfect for Linux users who want clean sound without the hassle. It’s like having your own NVIDIA Broadcast but open source and ready to rock on any machine!"
ai_features: ["🤖 AI-driven noise suppression for mic and output audio", "🎛️ Per-app routing control to filter only what you want", "🖥️ Handy CLI and GTK4 GUI for easy toggling and setup", "🔄 Native PipeWire integration with customizable filter chains"]
---

Broadcast routes individual application audio streams through DeepFilterNet AI noise suppression on Linux. Instead of filtering everything or nothing, you pick which apps get cleaned up — Discord and browser calls get noise-free audio while Spotify and games stay untouched.

Built it because every Linux noise suppression tool is all-or-nothing. I wanted typing noise gone from video calls without mangling my music. It runs on CPU (~3% of one core), so your GPU stays free.

Ships as three tiny Rust binaries: a shared library, a CLI for scripting/keybinds, and a GTK4+Libadwaita GUI for toggling per-app routing. Real-time stream detection via PipeWire monitoring, persistent per-app preferences, and one-click toggle from your status bar.