# Frontend — Yeswanth Portfolio

React + Vite frontend for Yeswanth Uggina's portfolio.

## Phase 0 Status
- Minimal application shell established.
- Directory structure configured for components, pages, sections, hooks, services, data, and styles.
- Connected to environment configuration via Vite (`VITE_API_BASE_URL`).
- Temporary landing screen active; full design system and interactive sections will be implemented in Phase 1.

---

## Directory Structure

```
frontend/
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Images, icons, static visual assets
│   ├── components/         # Reusable UI primitives (buttons, modals, cards)
│   ├── data/               # Static dataset definitions and schemas
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Route level views
│   ├── sections/           # Modular landing sections (Hero, About, Projects, etc.)
│   ├── services/           # Backend API clients (api.js)
│   ├── styles/             # Global CSS styles (index.css)
│   ├── App.jsx             # Main application shell
│   └── main.jsx            # Application entrypoint
├── index.html              # HTML shell
├── package.json            # Scripts & dependencies
├── vite.config.js          # Vite build config
└── README.md               # Frontend documentation
```

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```
