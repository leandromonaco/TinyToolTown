---
name: "Blob Explorer"
tagline: "Browser for Azure Blob Storage"
author: "Josh Hendricks"
author_github: "joshooaj"
github_url: "https://github.com/joshooaj/blobexplorer"
thumbnail: "/thumbnails/blob-explorer.png"
website_url: "https://blobexplorer.joshooaj.com/"
tags: ["azure", "blob", "selfhosted", "file", "browser"]
language: "JavaScript"
license: "MIT"
date_added: "2026-03-25"
featured: false
---

This small web service offers an easy way to search for files on Azure Blob Storage where anonymous public access is enabled. I built it because our organization's official downloads page was difficult to use, but all file downloads are hosted on Azure Blob Storage. Initially I wrote a script to enumerate the contents and stored that in JSON format. Then I built a basic web client around that for an easy-to-use file browsing/downloading experience.