---
title: Fix Docusaurus 3.9 Translation File Validation Error
description: After upgrading to Docusaurus 3.9, i18n translation files throw ValidationError - string format must be changed to message object format
date: 2026-03-01
tags: [Docusaurus, i18n, Bug Fix]
schema: Article
---

## TL;DR

Docusaurus 3.9 has strict requirements for translation file format. Values in `code.json` and `current.json` must be `{ "message": "xxx" }` object format, not plain strings or nested objects.

## Problem

Starting the English dev server throws an error:

```
[ERROR] Invalid translation file at "i18n/en/docusaurus-plugin-content-docs/current.json".

[ERROR] Error [ValidationError]: "version.label.message" is required.
"sidebar.tutorialSidebar.category.AI运营" must be of type object.
```

Invalid configuration example:

```json
{
  "version.label": {
    "Getting Started": "Getting Started"
  },
  "sidebar.tutorialSidebar.category.AI运营": "AI Analytics"
}
```

## Root Cause

Docusaurus 3.9 uses Joi for translation file validation, requiring all translation values to be objects containing a `message` field:

- `"key": "value"` ❌ String not valid
- `"key": { "subkey": "value" }` ❌ Nested object not valid
- `"key": { "message": "value" }` ✓ Correct format

The loose format from older versions is now strictly rejected in 3.9.

## Solution

Convert all translation values to `message` object format:

```json
{
  "version.label": {
    "message": "Getting Started"
  },
  "sidebar.tutorialSidebar.category.AI运营": {
    "message": "AI Analytics"
  }
}
```

Also applies to `code.json`:

```json
{
  "footer.support": {
    "message": "Support"
  },
  "footer.getStarted": {
    "message": "Quick Start"
  }
}
```

## FAQ

### Q: What's the difference between code.json and current.json in Docusaurus?

A: `code.json` is used for translations in `<Translate>` components, while `current.json` is used for docs plugin version labels and sidebar category translations.

### Q: Will existing translation files work after upgrading Docusaurus?

A: Version 3.9 requires strict `message` object format. Old formats will throw ValidationError. You need to batch convert the format before the server can start normally.
