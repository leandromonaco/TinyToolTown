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
---

docker-pushrm is a Docker CLI plugin that adds a new docker pushrm (speak: "push readme") command to Docker.

Update the README of your container repo on Docker Hub, Quay or Harbor from a local README file with a simple Docker command:

```
$ ls
README.md
$ docker pushrm my-user/hello-world
```

docker-pushrm is also available as a github action. See the README for details.