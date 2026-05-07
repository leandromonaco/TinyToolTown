---
name: "ComplexityRipper"
tagline: "A Roslyn-based code complexity analyzer that scans C# repositories for long functions, high cyclomatic complexity, and deep nesting."
author: "Mike Treit"
author_github: "Treit"
github_url: "https://github.com/Treit/ComplexityRipper"
thumbnail: "/thumbnails/complexityripper.webp"
tags: ["cli", "dotnet", "developer-tools"]
language: "C#"
license: "MIT"
date_added: "2026-05-07"
featured: false
---

This tool analyzes C# code repos and generates self-contained HTML reports with hyperlinks to source files in Azure DevOps and GitHub. It shows code that may be of concern due to very long methods, high complexity, high levels of nesting, or a combination of all of these. Useful to quickly analyze a repo for code that may be a candidate for refactoring.