# Monorepo Development with Turborepo

This project demonstrates how Turborepo can be used to manage a full-stack monorepo containing multiple applications and shared packages.

## Project Overview

The monorepo contains:

- `apps/web` — React frontend
- `apps/api` — Express backend
- `packages/types` — shared TypeScript types
- `packages/ui` — shared React UI components

The project shows how Turborepo improves development workflow through task orchestration, code sharing, and centralized management.

## Why this project?

In a traditional setup, frontend and backend are often managed separately, which can lead to duplicated code, repeated configuration, and more manual development steps.

This project explores how Turborepo helps solve these problems in a monorepo setup.

## Technologies Used

- React
- Express
- TypeScript
- pnpm workspaces
- Turborepo
- GitHub Actions

## Folder Structure

```text
apps/
  api/
  web/
packages/
  types/
  ui/
.github/
  workflows/
