<script setup lang="ts">
import type { Item } from '../types'
import { CheckCircle2 } from 'lucide-vue-next'

defineProps<{
  item: Item
}>()
</script>

<template>
  <div
    class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow dark:border-slate-800 dark:bg-slate-900"
  >
    <div class="flex items-start gap-3">
      <CheckCircle2 class="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
      <div>
        <h4 class="text-sm font-semibold text-slate-900 dark:text-slate-100">
          {{ item.title }}
        </h4>
        <p class="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
