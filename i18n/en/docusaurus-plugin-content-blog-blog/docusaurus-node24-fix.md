---
title: Fixing Docusaurus Build Failure After Node 24 Upgrade
date: 2026-02-28
tags: [Docusaurus, Node.js, Build Issues]
---

# Fixing Docusaurus Build Failure After Node 24 Upgrade

<!-- truncate -->

## Problem

After upgrading Node from v20 to v24 locally, `npm run build` fails:

```
[ERROR] Client bundle compiled with errors therefore further build is impossible.
assets/files/index-xxx.js from Terser plugin
Unexpected token: operator (<) [assets/files/index-xxx.js:7,undefined]
```

## Root Cause

Node.js v24 has compatibility issues with the Terser minifier used by Docusaurus 3.9.x:

1. Terser fails when processing JS files containing JSX syntax in Node 24 environment
2. The `<` symbol is misinterpreted as a comparison operator instead of JSX tag start
3. Error chain: `Node 24 → Terser 5.46.0 → JSX parsing failure`

## Solution

Use Docusaurus's official Faster solution (SWC replaces Terser).

### Step 1: Install Dependencies

```bash
npm install @docusaurus/faster --save-dev
```

### Step 2: Update Configuration

Edit `docusaurus.config.ts` and add the `future` config:

```typescript
const config: Config = {
  // ... other config

  future: {
    v4: true,
    experimental_faster: true,
  },

  // ...
};
```

### Step 3: Verify Build

```bash
npm run build
```

## Solution Overview

| Config | Purpose |
|--------|---------|
| `v4: true` | Enable Docusaurus v4 future flag |
| `experimental_faster: true` | Use SWC/Rspack instead of Terser/webpack |

**Benefits:**
- Maintain Node 24 version consistency
- Faster builds (SWC is 20x+ faster than Terser)
- Officially supported solution

## Version Comparison

| Environment | Before | After |
|-------------|--------|-------|
| Node.js | v20.20.0 | v24.13.1 |
| Minifier | Terser | SWC |
| Bundler | webpack | Rspack |

## References

- [Docusaurus Future Flags](https://docusaurus.io/docs/api/docusaurus-config#future)
- [Docusaurus Faster](https://docusaurus.io/docs/faster)
