# Engineering Conventions & Architecture Guidelines

## Architecture Overview

- Framework: Vue 3 (Composition API strictly with `<script setup lang="ts">`).
- Build Tool: Vite with Tailwind CSS v4 (`@tailwindcss/vite`).
- State Management: Pinia Setup Stores (`defineStore('name', () => { ... })`).
- Server State: TanStack Vue Query (`@tanstack/vue-query`) with centralized `queryClient`.
- HTTP Client: Axios instance (`src/lib/axios.ts`) configured with typed environment variables.
- Validation: Zod schemas (`src/config/env.ts` and feature schemas).
- Styling: Tailwind CSS v4 with `cn()` utility (`clsx` + `tailwind-merge`).

## Directory Organization

- `src/features/<feature-name>/`: Business domain modules.
  - `api/`: Feature-specific API endpoints.
  - `components/`: Feature-scoped components.
  - `composables/`: Feature-scoped business logic composables.
  - `schemas/`: Zod validation schemas.
  - `types/`: Feature-scoped TypeScript definitions.
- `src/components/ui/`: Global, reusable atomic UI components (BaseButton, BaseInput).
- `src/composables/`: Global reusable composables (useDebounce).
- `src/layouts/`: Application layout frames with `<RouterView />`.
- `src/stores/`: Global application state stores.
- `src/config/`: Environment variable schema validation and typed exports.

## Code Standards

- Composition API: Always use `<script setup lang="ts">` with type-based `defineProps<{ ... }>()` and `defineEmits<{ ... }>()`. Never use Options API.
- Path Aliases: Always import from `@/...` mapped to `src/...`.
- Git Commits: Strictly adhere to Conventional Commits (`feat:`, `fix:`, `chore:`, `refactor:`, `perf:`, `docs:`).
