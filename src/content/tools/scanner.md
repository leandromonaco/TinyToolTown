---
name: "Scanner"
tagline: "A minimalist basic windows scanner app with modern formats and cloud storage"
author: "Andy Brummer"
author_github: "andylbrummer"
github_url: "https://github.com/standardbeagle/scanner"
tags: ["windows", "scanner", "minimal"]
language: "C#"
license: "free"
theme: "ocean"
date_added: "2026-05-02"
featured: false
ai_summary: "Scan, auto-crop, and polish your documents with a sleek Windows app that turns your scanner into a smart, cloud-savvy companion—complete with OCR magic and modern export formats!"
ai_features: ["🖨️ WIA scanner support for flatbed, ADF, duplex, and film", "✂️ Auto-crop and perspective correction with OpenCV", "🔍 Powerful multi-language OCR using Qwen2.5-VL and Tesseract fallback", "☁️ Cloud exports to OneDrive and Google Drive"]
---

Scanner Integration -- WIA (Windows Image Acquisition) with support for Flatbed, ADF, Duplex, and Film sources
Image Processing -- Auto-crop, perspective correction, auto-enhance via OpenCvSharp
OCR -- Qwen2.5-VL via OpenRouter API (primary), Tesseract (offline fallback), multi-language support
Export -- Searchable PDF (with OCR text layer), PNG, JPEG, TIFF
Cloud Storage -- OneDrive and Google Drive integration (stubs)