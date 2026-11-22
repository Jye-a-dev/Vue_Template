<script setup lang="ts">
import { ref } from 'vue'
import { useDebounce } from '@/composables/useDebounce'
import { useExampleQuery } from '@/features/example/composables/useExampleQuery'
import ExampleCard from '@/features/example/components/ExampleCard.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { Loader2, RefreshCw, Sparkles, Filter } from 'lucide-vue-next'

const search = ref('')
const debouncedSearch = useDebounce(search, 300)

const { data: items, isLoading, isError, refetch, isFetching } = useExampleQuery()

function handleRefetch() {
  refetch()
}
</script>

<template>
  <div class="space-y-6">
    <div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Feature Module Architecture Demo
        </h2>
        <p class="text-xs text-slate-500 dark:text-slate-400">
          Source:
          <code
            class="rounded bg-slate-100 px-1 py-0.5 text-xs text-slate-800 dark:bg-slate-800 dark:text-slate-200"
            >src/features/example</code
          >
        </p>
      </div>
      <BaseButton variant="outline" size="sm" :disabled="isFetching" @click="handleRefetch">
        <RefreshCw class="mr-1.5 h-3.5 w-3.5" :class="{ 'animate-spin': isFetching }" />
        <span>Sync Data</span>
      </BaseButton>
    </div>

    <div
      class="space-y-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
    >
      <div class="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
        <Filter class="h-4 w-4 text-indigo-500" />
        <span>Custom Composable: useDebounce</span>
      </div>
      <div class="grid items-end gap-4 sm:grid-cols-2">
        <BaseInput
          v-model="search"
          label="Search input (type to observe debounce)"
          placeholder="Start typing..."
        />
        <div
          class="rounded-lg bg-slate-50 p-3 text-xs text-slate-700 dark:bg-slate-800/50 dark:text-slate-300"
        >
          <p>
            <span class="font-semibold text-slate-900 dark:text-slate-100">Immediate:</span>
            {{ search || '(empty)' }}
          </p>
          <p class="mt-1">
            <span class="font-semibold text-indigo-600 dark:text-indigo-400"
              >Debounced (300ms):</span
            >
            {{ debouncedSearch || '(empty)' }}
          </p>
        </div>
      </div>
    </div>

    <div class="space-y-3">
      <div class="flex items-center justify-between">
        <h3
          class="flex items-center gap-1.5 text-sm font-semibold text-slate-900 dark:text-slate-100"
        >
          <Sparkles class="h-4 w-4 text-indigo-500" />
          <span>Server State from TanStack Vue Query</span>
        </h3>
        <span v-if="items" class="text-xs text-slate-500">{{ items.length }} records loaded</span>
      </div>

      <div v-if="isLoading" class="flex items-center justify-center gap-2 py-12 text-slate-500">
        <Loader2 class="h-5 w-5 animate-spin text-indigo-600" />
        <span class="text-sm">Fetching items from query client...</span>
      </div>

      <div
        v-else-if="isError"
        class="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/50 dark:text-red-300"
      >
        Failed to fetch feature items. Please try again.
      </div>

      <div v-else-if="items && items.length > 0" class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <ExampleCard v-for="item in items" :key="item.id" :item="item" />
      </div>
    </div>
  </div>
</template>
