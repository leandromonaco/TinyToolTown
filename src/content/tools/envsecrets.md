---
name: "Envsecrets"
tagline: "CLI to keep your secrets out of .rc files and into mac keychain / 1password vault"
author: "Gabor Javorszky"
author_github: "javorszky"
github_url: "https://github.com/javorszky/envsecrets"
thumbnail: "/thumbnails/envsecrets.gif"
tags: ["cli", "secrets", "env", "1password", "keychain"]
language: "Go"
license: "MIT"
theme: "newspaper"
date_added: "2026-04-18"
featured: false
---

It's like 6 bash functions in a trench coat looking like a Go binary.

Whenever I signed up for a thing that gives me an API key that I should use from the terminal, I would put it in my `.zshrc` file with `export WHATEVER_API_KEY=`.

Turns out that's bad practice because I can accidentally share those when screen sharing and closing the wrong thing, or shoulder surfing, or I forget to add the file to the `.gitignore` folder for the `.env` variants.

Enter my tool I* built in a day or so. It saves my key-value pair into mac keychain, and then into 1password, provided I have the CLI installed and logged in, and I can use it to recall the secret in my rc file:

```bash
export WHATEVER_API_KEY = $(envsecrets fetch WHATEVER_API_KEY)
```

Screenshare? No problem.
Shoulder surfing? 🤷🏻 
Accidental commit? It doesn't help them at all.

It solved my problem. And the bash variants were yucky (but they're still provided for all to use if they so do wish)