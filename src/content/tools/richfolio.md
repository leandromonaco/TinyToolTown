---
name: "Richfolio"
tagline: "Zero-maintenance portfolio monitor with AI buy signals — runs free on GitHub Actions"
author: "Richard Fu"
author_github: "furic"
github_url: "https://github.com/furic/richfolio"
thumbnail: "/thumbnails/richfolio.png"
website_url: "https://furic.github.io/richfolio/"
tags: ["finance", "portfolio", "investing", "ai", "github-actions"]
language: "TypeScript"
license: "ISC"
theme: "newspaper"
date_added: "2026-03-24"
featured: false
ai_summary: "Keep your investment game sharp and stress-free with a zero-maintenance portfolio monitor that sends you AI-powered buy signals and insights automatically, all running for free on GitHub Actions! It's like having a savvy financial sidekick that never sleeps or charges a dime."
ai_features: ["🤖 AI buy recommendations with detailed analysis pages", "📈 Technical momentum signals including SMA, RSI, MACD, and Bollinger Bands", "🎯 Allocation gap detection with prioritized buy suggestions", "💸 Limit order prices based on smart support level calculations"]
---

![Feature Image](https://raw.githubusercontent.com/furic/richfolio/main/docs/feature-image.png)

Richfolio is a zero-maintenance portfolio monitoring system that sends daily email + Telegram briefings with allocation gaps, AI-powered buy recommendations, limit order prices, technical signals, and relevant news. It doesn't pick stocks for you — you bring your own portfolio of stocks, ETFs, or crypto, and it tells you *when* to buy based on valuation, technicals, news sentiment, and allocation drift.

Setup takes ~10 minutes: fork the repo, register a few free API accounts (Resend, NewsAPI, Google Gemini), paste the keys into GitHub Settings, and define your target allocations in a JSON config. That's it — no server, no dashboard, no coding required. Everything runs on a GitHub Actions cron job at $0/month.

Under the hood it uses Yahoo Finance for prices, fundamentals, and technicals (SMA, RSI, momentum), NewsAPI for headlines, and Google Gemini 2.5 Flash for AI analysis — including value ratings (ROE, debt/equity, FCF), bottom-fishing detection (oversold + volume contraction), and suggested limit order prices at nearby support levels. You also get a weekly rebalancing report, intraday alerts when signals strengthen, and a refresh mode for after-hours re-analysis.

Built it because I wanted a smart portfolio assistant that costs nothing, requires zero maintenance, and actually helps me time my buys better.

![Daily Brief](https://raw.githubusercontent.com/furic/richfolio/main/docs/screenshots/morning-debrief.png)
![Intraday Alert](https://raw.githubusercontent.com/furic/richfolio/main/docs/screenshots/intraday-alert.png)
![Weekly Rebalance](https://raw.githubusercontent.com/furic/richfolio/main/docs/screenshots/weekly-rebalance.png)
![STRONG BUY Analysis](https://raw.githubusercontent.com/furic/richfolio/main/docs/screenshots/strong-buy-analysis.png)