---
name: "Cull Diffusion"
tagline: "Local web app for reviewing/culling AI-generated images."
author: "Dave Bry"
author_github: "dbry23"
github_url: "https://github.com/dbry23/cull-diffusion"
thumbnail: "/thumbnails/cull-diffusion.webp"
tags: ["web", "web app", "ai", "ai images", "stable diffusion"]
language: "Next.js 15, TypeScript"
license: "CC BY-NC 4.0"
date_added: "2026-03-16"
featured: false
ai_summary: "Effortlessly swipe, tag, and sort your AI-generated images like a pro with this sleek mobile-friendly web app that makes culling a total breeze. Say goodbye to clutter and hello to streamlined creativity right from your phone or desktop!"
ai_features: ["📱 Mobile-optimized full-screen lightbox with swipe and pinch gestures", "🗂️ Batch tag images as Save, Redo, or Delete and apply all at once", "💾 Saves progress in actions.txt so you never lose your spot", "🖥️ Works cross-platform with easy local network access for phone or tablet reviews"]
---

A mobile-friendly web app for batch-reviewing AI-generated images. Browse folders of images, tag each one as Save, Redo, or Delete, then apply all actions at once. The Saves are copied to a destination folder, the Redos in subfolder of the destination (so you can attempt it again), and the Deletes are moved to the OS trash (in case you want to retrieve them again). 

I built it because I created another tool to batch create AI-generated images with different prompts and models. When I sit down to review them, I had to remember which ones I wanted to save/redo and was very cumbersome. As a developer, I sought a way to automate it, or at least make the process easier. Sat down with Claude and cranked this out with just a few prompts.

It's designed to run on a LAN, but you can also run it on the same machine you created the images in as localhost. There's no auth setup since it's intended to be on a LAN and have no risk/concerns with your local network. 

Pairs well with my other tool [Batch Diffusion](https://github.com/dbry23/batch-diffusion) to batch create images unattended.