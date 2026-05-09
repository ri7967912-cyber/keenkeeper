# KeenKeeper 🌿

> Keep your friendships alive — your personal shelf of meaningful connections.

## Description

KeenKeeper is a friendship management app that helps you stay intentional about the relationships that matter most. Track when you last connected with friends, set contact goals, log interactions, and never let important relationships drift.

## Technologies Used

- **React.js** — UI framework with hooks and context
- **React Router DOM v6** — Client-side routing
- **Tailwind CSS** — Utility-first styling
- **Recharts** — Pie chart for Friendship Analytics
- **React Hot Toast** — Toast notifications
- **Lucide React** — Icon library
- **Vite** — Build tool and dev server

## Features

1. **Friend Dashboard** — View all friends as cards with status indicators (On Track, Almost Due, Overdue)
2. **Quick Check-In** — Log Call, Text, or Video interactions from any friend's detail page, instantly adding to the timeline
3. **Friendship Analytics** — Visual pie chart breakdown of interaction types across all friends
4. **Timeline with Filters** — Full history of all interactions, filterable by type

## Getting Started

```bash
npm install
npm run dev
```

## Deployment

```bash
npm run build
```

Serve the `dist/` folder. For SPAs, configure your host to serve `index.html` for all routes (e.g., `_redirects` on Netlify: `/* /index.html 200`).
