# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `pnpm dev` — start dev server
- `pnpm build` — production build
- `pnpm lint` — run ESLint (flat config, no args needed)

## Stack

- **Next.js 16.2** (App Router) with **React 19** and **TypeScript**
- **Tailwind CSS v4** via `@tailwindcss/postcss` — uses `@import "tailwindcss"` and `@theme inline` blocks in `app/globals.css`, not a `tailwind.config` file
- **pnpm** as package manager (monorepo-capable via `pnpm-workspace.yaml`)
- Path alias: `@/*` maps to project root

## Architecture

- `app/` — Next.js App Router. `layout.tsx` is the root layout (Geist font family). `page.tsx` is the home page.
- `public/` — static assets
- CSS custom properties for theming (`--background`, `--foreground`) with dark mode via `prefers-color-scheme`

## Important: Next.js 16 Breaking Changes

Next.js 16 has breaking changes from earlier versions. **Before writing any code, read the relevant guide in `node_modules/next/dist/docs/`**. Do not assume APIs or conventions match your training data.
