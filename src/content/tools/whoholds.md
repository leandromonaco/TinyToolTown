---
name: "whoholds"
tagline: "Find which process is locking your file or hogging your port"
author: "Troy Willmot"
author_github: "Yortw"
github_url: "https://github.com/Yortw/winix"
thumbnail: "/thumbnails/whoholds.webp"
website_url: "https://github.com/Yortw/winix/tree/main/src/whoholds"
tags: ["cli", "windows", "developer-tools", "tiny"]
language: "C#"
license: "MIT"
date_added: "2026-04-19"
featured: false
ai_summary: "Discover which sneaky process is locking your file or hogging your port in a snap, making troubleshooting a breeze and freeing your resources faster than you can say whoholds!"
ai_features: ["🕵️‍♂️ Identify file locks and port bindings instantly", "🌍 Cross-platform support for seamless use on Windows, Linux, and macOS", "⚡ Native binaries with no runtime dependencies for lightning-fast performance", "🎨 Human-friendly output with color and clear error messages"]
---

You know that moment — "The process cannot access the file because it is being used by another process." Which process? Windows won't tell you. `handle.exe` requires a separate download and admin rights. `whoholds myapp.dll` just tells you.

Works for ports too: `whoholds :8080` shows what's binding it. Pipe the PIDs to kill them: `whoholds myfile --pid-only | xargs kill`. Cross-platform — wraps `lsof` on Linux/macOS. Ships as a single native AOT binary, no .NET runtime needed.

Built because the "file is locked" error is one of the most common and frustrating developer experiences on Windows, and the existing answer ("go download Sysinternals handle.exe and run it as admin") is absurd for something the OS already knows. Part of [Winix](https://github.com/Yortw/winix), a suite of cross-platform CLI tools for the gaps between Windows and *nix.