---
name: "Blob Explorer"
tagline: "Browser for Azure Blob Storage"
author: "Josh Hendricks"
author_github: "joshooaj"
github_url: "https://github.com/joshooaj/blobexplorer"
thumbnail: "/thumbnails/blob-explorer.webp"
website_url: "https://blobexplorer.joshooaj.com/"
tags: ["azure", "blob", "selfhosted", "file", "browser"]
language: "JavaScript"
license: "MIT"
date_added: "2026-03-25"
featured: false
ai_summary: "Dive into any public Azure Blob Storage like a digital spelunker with this sleek, self-hosted browser that makes finding and grabbing files a breeze! It’s fast, flexible, and just plain fun to explore storage treasures."
ai_features: ["🔥 Lightning-fast hierarchical navigation for 100K+ files", "⚡ Instant wildcard and regex-powered search", "🎯 Pin your favorite folders or searches for quick access", "🌙 Auto-detect dark mode with a manual toggle"]
---

This small web service offers an easy way to search for files on Azure Blob Storage where anonymous public access is enabled. I built it because our organization's official downloads page was difficult to use, but all file downloads are hosted on Azure Blob Storage. Initially I wrote a script to enumerate the contents and stored that in JSON format. Then I built a basic web client around that for an easy-to-use file browsing/downloading experience.