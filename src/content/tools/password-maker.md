---
name: "Password Maker"
tagline: "Password maker for web and windows"
author: "Thomas Taylor"
author_github: "thomas-taylor"
github_url: "https://github.com/thomas-taylor/password-maker"
thumbnail: "/thumbnails/password-maker.webp"
website_url: "https://thomas-taylor.github.io/passwordmaker/"
tags: ["windows", "web", "password"]
language: "C#"
license: "MIT"
date_added: "2026-05-02"
featured: false
---

PasswordMaker is a simple tool to create cryptographically strong, pseudorandom strings.  I made this years ago because I could not find an existing one that I liked.  It has lots of options on what characters to include but is mostly just a 'fancy' wrapper on System.Security.Cryptography.RandomNumberGenerator.  There are web (Blazor) and Windows (WPF) versions.  Passwords are made locally (web assembly or window) and never transferred over the internet.