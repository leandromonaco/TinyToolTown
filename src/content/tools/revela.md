---
name: "Revela"
tagline: "Single-binary static site generator for photographers — drop in JPGs, get a responsive gallery (AVIF/WebP/JPEG)"
author: "Kirsten Kluge"
author_github: "kirkone"
github_url: "https://github.com/Spectara/Revela"
thumbnail: "/thumbnails/revela.webp"
website_url: "https://revela.website"
tags: ["cli", "dotnet", "photo", "static-site", "gallery"]
language: "C#"
license: "MIT"
theme: "synthwave"
date_added: "2026-05-03"
featured: false
ai_summary: "Turn your photo collection into a stunning responsive gallery with zero hassle—just drop in your JPGs and watch a sleek, multi-format site pop out like magic, no command line needed! Perfect for photographers craving beautiful portfolios without the fuss."
ai_features: ["🖼️ Smart image processing with AVIF/WebP/JPEG support", "🧙 Interactive wizards for easy setup", "🔌 Extendable plugin system for extra power", "🎨 Customizable themes with Scriban templates"]
---

Revela is a static site generator built specifically for photographers. Point it at a folder of images, get back a fast portfolio site with modern image formats (AVIF, WebP, JPEG), responsive `` elements, CSS-only LQIP placeholders, EXIF data, and a plugin system.

One single-file executable — no .NET SDK, no Node, no ImageMagick, no package managers. Download, double-click, wizard walks you through setup. Built because the existing SSGs (Hugo, Eleventy, Astro) all treat images as an afterthought.

NetVips-powered image pipeline is 3-5× faster than ImageMagick. Comes with OneDrive source, EXIF statistics, gzip/brotli pre-compression, and a local dev server all built in.