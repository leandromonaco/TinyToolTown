---
name: "Batch Diffusion"
tagline: "Unattended batch image generation using Stable Diffusion"
author: "Dave Bry"
author_github: "dbry23"
github_url: "https://github.com/dbry23/batch-diffusion"
thumbnail: "/thumbnails/batch-diffusion.png"
tags: ["cli", "ai", "ai images", "stable diffusion", "stable-diffusion"]
language: "Python"
license: "CC BY-NC 4.0"
date_added: "2026-03-16"
featured: false
---

Unattended batch image generation for AUTOMATIC1111 Stable Diffusion WebUI. Feed it a prompts file, optionally cycle multiple checkpoints, and let it run — with cooldown pauses between images to prevent thermal throttling.

I built this because I wanted to create a series of AI generated images, but not sit there and keep pasting in prompts and also wait for my laptop to cool off. I also wanted to test the prompts using different models/checkpoints, which is also very time consuming. 

Pairs well with my other tool [Cull Diffusion](https://github.com/dbry23/cull-diffusion) to review the images after they're done.