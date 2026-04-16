# Next.js Starter Pack

A production-oriented Next.js starter with:

- an interactive project setup script
- Docker-ready standalone build output
- Jenkins deployment pipeline
- Husky commit quality gates
- Biome lint/format tooling

Use this template when you want to bootstrap a new app quickly, standardize local setup, and keep deployment conventions consistent across projects.

## What You Get

- Next.js 16 + React 19 + TypeScript strict mode
- App Router project structure under `src/app`
- Health endpoint at `GET /api/health`
- `@tanstack/react-query` provider wiring in `ClientWrapper`
- Docker multi-stage build for optimized production image
- Jenkins safe deploy pattern (start new container, health check, then swap)
- Git hooks for formatting, linting, build, type-check, and commit message convention

## Tech Stack

- Framework: [Next.js](https://nextjs.org/)
- Language: TypeScript
- Lint/Format: [Biome](https://biomejs.dev/)
- Git Hooks: [Husky](https://typicode.github.io/husky/)
- Containerization: Docker (`output: "standalone"`)
- CI/CD: Jenkins pipeline (`Jenkinsfile`)

## Quick Start

### 1) Install dependencies

```bash
npm install
```

### 2) Run the interactive setup

```bash
npm run project:setup
```

The script asks for:

- project name
- port
- whether to run Next.js upgrade
- whether to run `npm install`
- whether to update `.gitignore` with recommended local rules

### 3) Start development server

```bash
npm run dev
```

Open `http://localhost:<your-port>`.

## Setup Script Details

`scripts/project-setup.mjs` automates project personalization.

When you run it, it updates:

- `package.json`
  - `name`
  - `scripts.dev` port
  - `scripts.start` port
- `package-lock.json`
  - root package `name`
- `Dockerfile`
  - `EXPOSE <port>`
  - healthcheck URL port
- `Jenkinsfile`
  - `IMAGE_NAME`
  - `CONTAINER_NAME`
  - `ENV_CREDENTIAL_ID` (set to `<project_name>_env`)
  - `HOST_PORT` and `CONTAINER_PORT`
- `README.md`
  - localhost URLs port replacement
- `.gitignore` (optional, prompt-based)
  - appends missing recommended entries with proper section spacing

## Available Scripts

- `npm run dev` - run Next.js dev server
- `npm run build` - create production build
- `npm run start` - run production server
- `npm run project:setup` - run interactive project initializer
- `npm run lint` - Biome checks
- `npm run format` - Biome formatter
- `npm run type-check` - TypeScript checks without emitting files

## Project Structure

```text
.
├── scripts/
│   └── project-setup.mjs
├── src/
│   ├── app/
│   │   ├── api/health/route.ts
│   │   ├── (main)/ui/page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── common/
│       │   ├── footer/Footer.tsx
│       │   └── header/Header.tsx
│       └── wrappers/ClientWrapper.tsx
├── .husky/
├── Dockerfile
├── Jenkinsfile
└── biome.json
```

## Code Quality and Git Hooks

This starter includes Husky hooks:

- `pre-commit` runs:
  - `npm run format`
  - `npm run lint`
  - `npm run build`
  - `npm run type-check`
- `commit-msg` enforces commit format:
  - `type(scope): message`
  - allowed types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- `pre-push` blocks direct pushes to `main` and `dev`

Example valid commit messages:

- `feat(auth): add login endpoint`
- `fix(ci): correct docker image tag`
- `docs(readme): document setup script`

## Environment Variables

Create a local `.env` file as needed by your app.

Current example:

```env
PORT=3000
```

> Note: `.env*` is ignored by default, while `!.env.example` is allowed for committing templates.

## Docker Usage

### Build image

```bash
docker build -t nextjs-starter:latest .
```

### Run container

```bash
docker run -d --name nextjs-starter -p 3000:3000 --env-file .env nextjs-starter:latest
```

The container includes a health check against:

- `http://localhost:3000/api/health`

## Jenkins Pipeline Overview

`Jenkinsfile` performs:

1. checkout
2. Docker build (`BUILD_NUMBER` + `latest` tags)
3. safe deploy:
   - launch temporary container
   - run health check
   - replace old container only after success
4. cleanup (`docker image prune -f`)

It expects a Jenkins **File Credential** ID:

- default pattern: `<project_name>_env`

That file is passed as the runtime env file to the container.

## Health Endpoint

For readiness checks and monitoring:

- `GET /api/health` returns `200` with body `ok`

## Recommended Post-Template Checklist

After creating a new project from this starter:

1. run `npm run project:setup`
2. update app metadata in `src/app/layout.tsx`
3. replace placeholder UI in `src/app/page.tsx`
4. create `.env.example` with required keys
5. validate CI credentials and ports in Jenkins

## Troubleshooting

- **Invalid commit message format**
  - use `type(scope): message`, e.g. `feat(api): add users route`
- **Commit blocked by pre-commit hook**
  - run `npm run format && npm run lint && npm run build && npm run type-check`
  - fix errors, then commit again
- **Port already in use**
  - rerun `npm run project:setup` and choose a different port

## License

Use this starter as your project baseline and customize license terms for your organization/team needs.
