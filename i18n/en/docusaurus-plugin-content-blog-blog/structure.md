---
title: Project Structure
date: 2026-02-10
tags: [Docusaurus, Architecture]
---

# Project Structure

<!-- truncate -->

```
docs-site/
├── docs/               # Product documentation content
├── developers/         # Developer documentation (current directory)
├── src/
│   ├── components/    # React components
│   ├── css/           # Style files
│   └── pages/         # Page components
├── static/            # Static assets
├── plugins/           # Custom plugins
├── scripts/           # Utility scripts
├── docusaurus.config.ts
├── sidebars.ts        # Product docs sidebar
└── sidebarsDevelopers.ts  # Developer docs sidebar
```

## Core Directories

| Directory | Description |
|-----------|-------------|
| `docs/` | Product user documentation (for merchant users) |
| `developers/` | Technical documentation (for developers) |
| `src/components/` | Custom React components |
| `plugins/` | Docusaurus custom plugins |
