<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import { Rocket, Github, Layers } from 'lucide-vue-next'
</script>

<template>
  <div
    class="flex min-h-screen flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100"
  >
    <header
      class="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80"
    >
      <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <div class="flex items-center gap-3">
          <div class="rounded-lg bg-indigo-600 p-2 text-white shadow-sm">
            <Rocket class="h-5 w-5" />
          </div>
          <div>
            <h1 class="text-base leading-none font-semibold">Vue 3 Template</h1>
            <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">Enterprise Architecture</p>
          </div>
        </div>

        <nav class="flex items-center gap-4 text-sm font-medium">
          <RouterLink
            to="/"
            class="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
            active-class="text-indigo-600 dark:text-indigo-400 font-semibold"
          >
            Dashboard
          </RouterLink>
          <RouterLink
            to="/example"
            class="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
            active-class="text-indigo-600 dark:text-indigo-400 font-semibold"
          >
            Feature Example
          </RouterLink>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            aria-label="GitHub"
          >
            <Github class="h-5 w-5" />
          </a>
        </nav>
      </div>
    </header>

    <main class="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
      <RouterView />
    </main>

    <footer
      class="border-t border-slate-200 py-6 text-center text-xs text-slate-500 dark:border-slate-800"
    >
      <div class="flex items-center justify-center gap-2">
        <Layers class="h-4 w-4" />
        <span>Production-ready Vue 3 + Vite + TypeScript + Tailwind CSS v4 + TanStack Query</span>
      </div>
    </footer>
  </div>
</template>
