---
name: "Docker Push Readme"
tagline: "A Docker CLI plugin to update container repo docs."
author: "Christian Korneck"
author_github: "christian-korneck"
github_url: "https://github.com/christian-korneck/docker-pushrm"
thumbnail: "/thumbnails/docker-push-readme.webp"
website_url: "https://github.com/christian-korneck/docker-pushrm"
tags: ["docker", "containers", "dockerhub", "quay", "harbor"]
language: "Go"
license: "MIT"
date_added: "2026-05-02"
featured: false
ai_summary: "Say goodbye to boring container repos with a magic Docker command that instantly updates your registry README from your local file—super simple, super slick, and keeps your docs as fresh as your images!"
ai_features: ["🐳 One-liner Docker CLI plugin for pushing READMEs", "🌐 Supports Dockerhub, Quay, and Harbor registries", "🔐 Uses existing Docker credentials for seamless auth", "🚀 Perfect for CI/CD workflows and GitHub/GitLab actions"]
---

docker-pushrm is a Docker CLI plugin that adds a new docker pushrm (speak: "push readme") command to Docker.

Update the README of your container repo on Docker Hub, Quay or Harbor from a local README file with a simple Docker command:

```
$ ls
README.md
$ docker pushrm my-user/hello-world
```

docker-pushrm is also available as a github action. See the README for details.