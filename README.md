# docs-site

Documentation site with Nextra 4 + Express API.

## Stack

| Frontend | Backend |
|----------|---------|
| Nextra 4.6.1 | Express 5.2.1 |
| Next.js 15.1.9 | Port: 3005 |
| React 19.2.4 | Customer service API |
| Port: 3004 | |

## Structure
```
docs-site/
├── frontend/          # Nextra (App Router)
│   ├── app/          # Pages (MDX)
│   ├── next.config.mjs
│   └── package.json
│
├── backend/          # Express API
│   ├── server.js
│   └── package.json
│
└── package.json      # Monorepo scripts
```

## Quick Start

```bash
# Install all dependencies
npm install && cd frontend && npm install && cd ../backend && npm install

# Development
npm run dev
# → Frontend: http://localhost:3004
# → Backend:  http://localhost:3005

# Build
npm run build

# Production
npm start
```

## Configuration

- **Frontend**: [next.config.mjs](frontend/next.config.mjs)
- **Layout**: [app/layout.jsx](frontend/app/layout.jsx)
- **Backend**: [server.js](backend/server.js)
- **AI Instructions**: [AI_INSTRUCTIONS.md](AI_INSTRUCTIONS.md) (无歧义指令标准)

## License
MIT
