---
name: "Coding Agent Explorer"
tagline: "Real-time .NET proxy and dashboard for inspecting AI coding agent API calls (currently supports Claude Code)"
author: "Tore Nestenius"
author_github: "tndata"
github_url: "https://github.com/tndata/CodingAgentExplorer"
thumbnail: "/thumbnails/coding-agent-explorer.webp"
tags: ["ai"]
language: "C#"
license: "MIT"
date_added: "2026-05-05"
featured: false
---

A real-time .NET proxy and dashboard for inspecting Claude Code API calls. Intercept, visualize, and analyze every request and response between Claude Code and the Anthropic API.

With Coding Agent Explorer, you can:

- See every API request and response between Claude Code and the Anthropic API in real time
- Inspect full request/response headers, bodies, and streaming SSE events
- Track token usage, model selection, and time-to-first-token
- Follow the conversation as a readable chat-style timeline
- Capture and inspect MCP tool calls between Claude Code and HTTP-based MCP servers
- Monitor Claude Code hook events alongside API traffic