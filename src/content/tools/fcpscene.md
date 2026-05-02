---
name: "fcpscene"
tagline: "This program finds scene changes in videos and generates a Final Cut Pro project with cuts at those scene changes"
author: "Eric Fortis"
author_github: "ericfortis"
github_url: "https://github.com/ericfortis/final-cut-pro-scene-detect"
thumbnail: "/thumbnails/fcpscene.webp"
tags: ["video-editing"]
language: "Python"
license: "MIT"
date_added: "2026-05-02"
featured: false
---



That example processed a video with five cuts, so the timeline has six compound clips.




I wanted to increase the frame rate of old videos using Final Cut’s Optical Flow (Machine Learning) interpolation and to avoid interpolating frames when scene changes occur, we need to process each scene individually.

Scene detection is done by FFmpeg using the Sum of Absolute Differences method.