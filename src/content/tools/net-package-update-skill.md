---
name: ".NET Package Update Skill"
tagline: "Creates a Skill for Agentic dev tools for upgrading .NET Packages from release notes."
author: "Zack Way"
author_github: "seiggy"
github_url: "https://github.com/seiggy/package-update-skill"
thumbnail: "/thumbnails/net-package-update-skill.webp"
tags: ["dotnet", "copilot", "skills"]
language: "C#"
license: "MIT"
theme: "neon"
date_added: "2026-04-02"
featured: false
ai_summary: "Upgrade your .NET packages like a pro by magically generating step-by-step migration guides, code transformations, and docs straight from release notes—no more guesswork or manual digging! It’s like having an AI-powered upgrade assistant who never sleeps and always knows what changed."
ai_features: ["🔍 Discovers GitHub source and release tags between versions", "🧠 Analyzes and extracts breaking changes plus deprecations from release notes", "📄 Generates detailed markdown docs and Roslyn migration scripts", "✅ Validates output against source to squash hallucinations"]
---

## Package Update Skill
A .NET 10 tool that analyzes NuGet package upgrades between two versions, fetches release notes from GitHub, and generates a GitHub Copilot skill with migration instructions, breakdown docs, and Roslyn-based code transformation scripts.

## What It Does
Given a NuGet package name and two version numbers, this tool runs a 5-phase AI pipeline:
Discovery — Finds the package's source repository on GitHub and lists all release tags between the two versions
Analyze — Fetches and analyzes release notes for each version in chunks, extracting breaking changes, renames, and deprecations
Compile — Merges and deduplicates findings into a unified migration guide
Generate — Produces a SKILL.md, focused breakdown markdown docs, and a Roslyn migration script
Review — Cross-references all output against source evidence, fixes hallucinations or missing items