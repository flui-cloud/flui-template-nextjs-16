# Flui Template — Next.js 16

A minimal demo application built with **Next.js 16** (App Router) and ready to deploy on [Flui](https://flui.cloud).

This template includes:

- ⚡ Next.js 16 with the App Router and Turbopack
- 🩺 `/api/health` endpoint
- 📦 In-memory item store with full CRUD (`/api/items`)
- 📖 OpenAPI 3.1 spec served at `/api/openapi`
- 📚 Swagger UI at `/docs`
- 🐳 Multi-stage Dockerfile (`#flui-managed`)
- ✅ Standalone build for minimal runtime image

## Local development

```bash
npm install
npm run dev
```

App runs on http://localhost:3000

## Build with Docker

```bash
docker build -t flui-demo-nextjs .
docker run -p 3000:3000 flui-demo-nextjs
```

Then visit:

- http://localhost:3000 — homepage
- http://localhost:3000/api/health — health check
- http://localhost:3000/api/items — items API
- http://localhost:3000/docs — Swagger UI

## Environment variables

See [.env.example](.env.example) for available variables. None are required for the demo to run.

| Variable | Default | Description |
|----------|---------|-------------|
| `APP_NAME` | `Flui Demo Next.js` | Application name shown in UI/health |
| `APP_VERSION` | `1.0.0` | Application version |
| `LOG_LEVEL` | `info` | Logging verbosity |
| `PORT` | `3000` | HTTP server port |

## Deploy with Flui

1. Click **Use this template** on GitHub to create your own copy
2. Connect the new repository to Flui
3. Flui detects the `#flui-managed` Dockerfile and configures everything automatically
4. Click **Deploy** — your app is live in under a minute

## Project structure

```
.
├── app/                    # Next.js App Router
│   ├── api/
│   │   ├── health/        # GET /api/health
│   │   ├── items/         # GET, POST /api/items + GET, DELETE /api/items/:id
│   │   └── openapi/       # GET /api/openapi (OpenAPI 3.1 spec)
│   ├── docs/              # GET /docs (Swagger UI)
│   ├── layout.tsx
│   ├── page.tsx           # Homepage with badge and items list
│   └── globals.css
├── lib/
│   ├── store.ts           # In-memory item store
│   └── openapi.ts         # OpenAPI spec definition
├── Dockerfile             # #flui-managed multi-stage build
├── next.config.js
└── package.json
```

## License

MIT
