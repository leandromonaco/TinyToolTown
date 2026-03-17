---
name: "PS TextMate"
tagline: "PowerShell module to render with TextMate grammar in the console using Spectre.Console"
author: "Andree Renneus"
author_github: "trackd"
github_url: "https://github.com/trackd/TextMate"
thumbnail: "/thumbnails/ps-textmate.png"
website_url: "https://github.com/trackd/TextMate"
tags: ["cli", "terminal", "markdown", "textmate", "sixel"]
language: "C#"
license: "MIT"
theme: "terminal"
date_added: "2026-03-17"
featured: false
---

TextMate delivers syntax-aware highlighting for PowerShell on top of TextMate grammars. It exposes a focused set of cmdlets that emit tokenized, theme-styled HighlightedText renderables you can write directly or feed into any Spectre-based pipeline. Helper cmdlets make it easy to discover grammars and validate support for files, extensions, or language IDs before formatting.

What it does

- Highlights source text using TextMate grammars such as PowerShell, C#, Markdown, and Python.  
- Builtin pager, either through -Page or piping to Out-Page  
- Returns HighlightedText renderables that implement Spectre.Console's contract, so they can be written directly or through other Spectre hosts.  
- Provides discovery and testing helpers for installed grammars, extensions, or language IDs.  
- Sixel images in markdown.  

Install
```ps1
Install-Module TextMate
```

Examples
```ps1
# highlight a C# snippet
"public class C { void M() {} }" | Format-CSharp

# render a Markdown file with a theme
Get-Content README.md -Raw | Format-Markdown -Theme SolarizedLight

# FileInfo Object
Get-Item .\script.ps1 | Format-TextMate -Page
```