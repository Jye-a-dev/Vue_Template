<script setup lang="ts">
import { ref } from 'vue'
import { Rocket, ShieldCheck, Zap, Boxes, Code2, Workflow, CheckCircle } from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'
import { useAppStore } from '@/stores/useAppStore'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useAppStore()
const counter = ref(0)

function increment() {
  counter.value++
}

function navigateToExample() {
  router.push('/example')
}

const techStack = [
  { name: 'Vue 3', version: '3.5+', role: 'Core Framework' },
  { name: 'Vite', version: '8.3+', role: 'Build Tool' },
  { name: 'TypeScript', version: '6.0+', role: 'Type Safety' },
  { name: 'Tailwind CSS', version: 'v4', role: 'Styling Engine' },
  { name: 'Pinia', version: '4.1+', role: 'Global State' },
  { name: 'TanStack Query', version: 'v5', role: 'Server State' },
  { name: 'Vue Router', version: 'v5', role: 'Routing' },
  { name: 'Zod', version: 'v4', role: 'Runtime Validation' },
  { name: 'ESLint & Prettier', version: 'v10 / v3', role: 'Code Quality' },
]

const features = [
  {
    icon: Rocket,
    title: 'Production Architecture',
    desc: 'Feature-based modular pattern separating domain concerns for seamless collaboration.',
  },
  {
    icon: ShieldCheck,
    title: 'Type-Safe Runtime Validation',
    desc: 'Strict Zod schemas for environment variables and HTTP requests/responses.',
  },
  {
    icon: Zap,
    title: 'Tailwind CSS v4 & Vite',
    desc: 'Cutting-edge styling engine powered by @tailwindcss/vite with zero config overhead.',
  },
  {
    icon: Workflow,
    title: 'Automated Git Quality Gates',
    desc: 'Husky v9 hooks running lint-staged and commitlint with Conventional Commits.',
  },
]
</script>

<template>
  <div class="space-y-8">
    <section
      class="rounded-2xl bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-950 p-8 text-white shadow-xl"
    >
      <div class="max-w-3xl space-y-4">
        <div
          class="inline-flex items-center gap-2 rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-semibold text-indigo-300 ring-1 ring-indigo-500/30"
        >
          <Boxes class="h-3.5 w-3.5" />
          <span>Production-Ready Vue 3 Enterprise Template</span>
        </div>
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Architected for Solo and High-Velocity Teams
        </h2>
        <p class="text-sm leading-relaxed text-indigo-200/80">
          Pre-configured with modern ecosystem tooling, typed environment control, strict linting,
          and a scalable feature-driven directory structure.
        </p>
        <div class="flex flex-wrap items-center gap-3 pt-2">
          <BaseButton variant="primary" size="md" @click="navigateToExample">
            Explore Feature Architecture
          </BaseButton>
          <BaseButton
            variant="outline"
            size="md"
            class="border-indigo-400 text-indigo-100 hover:bg-indigo-900/50"
            @click="increment"
          >
            Interactive Counter: {{ counter }}
          </BaseButton>
        </div>
      </div>
    </section>

    <section class="space-y-4">
      <div class="flex items-center justify-between">
        <h3
          class="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-slate-100"
        >
          <Code2 class="h-5 w-5 text-indigo-500" />
          <span>Core Technology Stack</span>
        </h3>
        <span class="text-xs text-slate-500">Theme: {{ store.theme }}</span>
      </div>
      <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
        <div
          v-for="tech in techStack"
          :key="tech.name"
          class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <div class="flex items-center justify-between">
            <span class="text-sm font-semibold text-slate-900 dark:text-slate-100">
              {{ tech.name }}
            </span>
            <span
              class="rounded bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400"
            >
              {{ tech.version }}
            </span>
          </div>
          <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">{{ tech.role }}</p>
        </div>
      </div>
    </section>

    <section class="space-y-4">
      <h3 class="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
        <CheckCircle class="h-5 w-5 text-emerald-500" />
        <span>Enterprise Foundations</span>
      </h3>
      <div class="grid gap-4 sm:grid-cols-2">
        <div
          v-for="feat in features"
          :key="feat.title"
          class="flex items-start gap-3.5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <div
            class="rounded-lg bg-indigo-50 p-2 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400"
          >
            <component :is="feat.icon" class="h-5 w-5" />
          </div>
          <div>
            <h4 class="text-sm font-semibold text-slate-900 dark:text-slate-100">
              {{ feat.title }}
            </h4>
            <p class="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              {{ feat.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
