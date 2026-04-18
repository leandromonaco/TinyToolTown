---
name: "PdfUtility"
tagline: "A local web app for converting, merging, splitting, and compressing PDFs."
author: "Domagoj Pluscec"
author_github: "dpluscec"
github_url: "https://github.com/dpluscec/pdf2png"
thumbnail: "/thumbnails/pdfutility.webp"
tags: ["pdf", "utility"]
language: "TypeScript"
license: "MIT"
date_added: "2026-04-15"
featured: false
---

A local web app for converting, merging, splitting, and compressing PDFs. I've built it as a local replica of sites similar to ilovepdf and png2pdf with benefit of being certain that my files are processed locally. While great CLI tools exists for the same purpose, I was always UI fan and found them more intuitive.

Features
PDF → PNG — Convert each page of a PDF to a PNG image at a configurable DPI (72–600). Runs entirely in-browser or via the server. Downloads a ZIP per file, or convert all at once into a single ZIP.
Merge PDFs — Drop in multiple PDFs, drag them into the order you want, then merge into a single file.
PNG → PDF — Pack one or more PNG images into a single PDF document.
Split PDF — Extract pages by range, individual page list, or target file size. Downloads results as a ZIP.
Compress PDF — Reduce PDF file size with selectable compression levels, powered by Ghostscript.