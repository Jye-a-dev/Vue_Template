# Vue 3 Production Template

Production-ready, enterprise-grade frontend template built with **Vue 3**, **Vite**, **TypeScript**, **Tailwind CSS v4**, and **TanStack Vue Query**. Architected with a feature-driven modular pattern optimized for both solo developers and agile engineering teams.

---

## Tech Stack & Versions

| Package                | Version    | Purpose                                                              |
| :--------------------- | :--------- | :------------------------------------------------------------------- |
| **Vue**                | `^3.5.44`  | Core Reactive Framework (Composition API `<script setup lang="ts">`) |
| **Vite**               | `^8.3.6`   | Next-generation frontend bundler and dev server                      |
| **TypeScript**         | `~6.0.3`   | Static type checking and compile-time contract enforcement           |
| **Tailwind CSS**       | `^4.3.5`   | Modern utility-first CSS engine (`@tailwindcss/vite`)                |
| **Pinia**              | `^4.1.0`   | Centralized client-side state management (Setup Store pattern)       |
| **TanStack Vue Query** | `^5.108.2` | Async server state, caching, synchronization & garbage collection    |
| **Vue Router**         | `^5.5.1`   | Client-side routing with route-level guards & lazy loading           |
| **Zod**                | `^4.6.7`   | Runtime schema declaration and validation                            |
| **Axios**              | `^1.21.1`  | Promise-based HTTP client with typed interceptors                    |
| **Lucide Vue Next**    | `^1.0.0`   | Accessible, consistent iconography                                   |
| **ESLint**             | `^10.15.0` | Flat Config linting with `typescript-eslint` & `eslint-plugin-vue`   |
| **Prettier**           | `^3.10.1`  | Code formatting with `prettier-plugin-tailwindcss`                   |
| **Husky**              | `^9.1.7`   | Native Git hooks enforcement                                         |
| **Lint-Staged**        | `^16.4.0`  | Staged file quality inspection prior to commit                       |

---

## System Requirements

- **Node.js**: `>= 22.0.0` (Refer to `.nvmrc`)
- **Package Manager**: `npm` (`>= 10.0.0`)
- **Recommended VS Code Extensions**:
  - `Vue.volar` (Vue - Official)
  - `dbaeumer.vscode-eslint` (ESLint)
  - `esbenp.prettier-vscode` (Prettier)
  - `bradlc.vscode-tailwindcss` (Tailwind CSS IntelliSense)

---

## Quick Start

```bash
# 1. Clone the repository
git clone <repository-url>
cd vue_template

# 2. Configure environment variables
cp .env.example .env

# 3. Install dependencies
npm install

# 4. Start local development server (listens on port 5000 by default)
npm run dev
```

Visit [http://localhost:5000](http://localhost:5000) to view the application.

---

## Environment Variables

All variables are loaded via `loadEnv` and validated at runtime with Zod in `src/config/env.ts`.

| Variable            | Default Value               | Description                                     |
| :------------------ | :-------------------------- | :---------------------------------------------- |
| `VITE_PORT`         | `5000`                      | Port for Vite local dev server and preview mode |
| `VITE_API_BASE_URL` | `http://localhost:8000/api` | Base URL for the Axios HTTP client instance     |

---

## Directory Architecture

```plaintext
src/
├── assets/                   # Static internal media, images, and fonts
├── components/
│   └── ui/                   # Global atomic UI primitives (BaseButton.vue, BaseInput.vue)
├── composables/              # Cross-cutting composables (e.g., useDebounce.ts)
├── config/
│   └── env.ts                # Zod-validated typed environment exports
├── features/                 # Domain-driven feature modules
│   └── example/
│       ├── api/              # Domain HTTP endpoints and mock providers
│       ├── components/       # Feature-scoped UI components
│       ├── composables/      # Feature business logic composables
│       ├── schemas/          # Domain Zod validation schemas
│       └── types/            # TypeScript definitions specific to feature
├── layouts/
│   └── MainLayout.vue        # Application structure framing <RouterView />
├── lib/
│   ├── axios.ts              # Pre-configured Axios instance with auth interceptors
│   └── queryClient.ts        # Centralized TanStack Vue Query client configuration
├── router/
│   └── index.ts              # Route definitions with lazy loading & navigation guards
├── stores/
│   └── useAppStore.ts        # Global client state powered by Pinia Setup Stores
├── types/
│   └── api.ts                # Shared global API response and pagination interfaces
├── utils/
│   └── cn.ts                 # Class merging utility (clsx + tailwind-merge)
├── views/                    # Top-level route pages (DashboardView, ExampleView)
├── App.vue                   # Root mount component
├── main.ts                   # Application entry point
└── style.css                 # Main stylesheet with Tailwind CSS v4 import
```

### Module Placement Guidelines

- **`src/features/<domain>/`**: Any component, composable, or API call tied to a specific business feature.
- **`src/components/ui/`**: Generic, headless or styled UI controls reused across 2+ domain features (buttons, inputs, modals).
- **`src/composables/`**: Generic utility logic reused application-wide (debouncing, media queries, local storage sync).
- **`src/stores/`**: High-level cross-feature application state (current user, global theme, active modals).

---

## Available NPM Scripts

```bash
npm run dev          # Start Vite dev server on configured port (default 5000)
npm run build        # Type-check and produce production bundle in /dist
npm run preview      # Locally preview production build
npm run type-check   # Run vue-tsc without emitting build files
npm run lint         # Run ESLint across all .ts, .vue files and auto-fix
npm run format       # Format code base using Prettier
```

---

## Git Workflow & Conventional Commits

Commits must follow the [Conventional Commits](https://www.conventionalcommits.org/) format, enforced via Husky and Commitlint:

- `feat:` Introduce new features
- `fix:` Patch bugs
- `refactor:` Code changes that neither fix a bug nor add a feature
- `perf:` Performance improvements
- `chore:` Dependency, build, or configuration updates
- `docs:` Documentation modifications
