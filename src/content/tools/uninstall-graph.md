---
name: "Uninstall-Graph"
tagline: "Cleanly remove Microsoft Graph and Azure PowerShell modules."
author: "Merill Fernando"
author_github: "merill"
github_url: "https://github.com/merill/uninstall-graph"
thumbnail: "/thumbnails/uninstall-graph.webp"
website_url: "https://uninstall-graph.merill.net"
tags: ["microsoft-graph", "azure", "cleanup", "admin-tools", "open-source"]
language: "PowerShell"
license: "MIT"
date_added: "2026-05-02"
featured: false
---

Uninstall-Graph is a free, open source PowerShell module that removes Microsoft Graph, Microsoft Entra, Azure PowerShell, AzureRM, and related Microsoft cloud modules from a machine. It handles dependency order, retries, and leftover module directories so users can get back to a clean slate without wrestling with `Uninstall-Module`. It is tiny and useful because it solves one specific PowerShell cleanup problem that can otherwise be surprisingly frustrating.