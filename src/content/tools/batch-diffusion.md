---
name: "Batch Diffusion"
tagline: "Unattended batch image generation using Stable Diffusion"
author: "Dave Bry"
author_github: "dbry23"
github_url: "https://github.com/dbry23/batch-diffusion"
thumbnail: "/thumbnails/batch-diffusion.webp"
tags: ["cli", "ai", "ai images", "stable diffusion", "stable-diffusion"]
language: "Python"
license: "CC BY-NC 4.0"
date_added: "2026-03-16"
featured: false
ai_summary: "Kick back and let this clever little script crank out batches of AI-generated art while keeping your laptop cool and happy—perfect for running unattended image marathons with style!"
ai_features: ["🤖 Unattended batch image generation via Stable Diffusion API", "❄️ Randomized cooldown pauses to prevent GPU overheating", "🎨 Supports multiple checkpoints for easy model comparisons", "📝 Per-prompt parameter overrides for ultimate customization"]
---

Unattended batch image generation for AUTOMATIC1111 Stable Diffusion WebUI. Feed it a prompts file, optionally cycle multiple checkpoints, and let it run — with cooldown pauses between images to prevent thermal throttling.

I built this because I wanted to create a series of AI generated images, but not sit there and keep pasting in prompts and also wait for my laptop to cool off. I also wanted to test the prompts using different models/checkpoints, which is also very time consuming. 

Pairs well with my other tool [Cull Diffusion](https://github.com/dbry23/cull-diffusion) to review the images after they're done.