<script setup lang="ts">
import { useRouter } from 'vue-router'
import BaseButton from '@/components/ui/BaseButton.vue'
import { AlertCircle } from 'lucide-vue-next'

const router = useRouter()

function goHome() {
  router.push('/')
}
</script>

<template>
  <div class="flex min-h-[50vh] flex-col items-center justify-center px-4 text-center">
    <div class="rounded-full bg-red-100 p-3 text-red-600 dark:bg-red-950 dark:text-red-400">
      <AlertCircle class="h-8 w-8" />
    </div>
    <h2 class="mt-4 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
      Page Not Found
    </h2>
    <p class="mt-2 max-w-sm text-sm text-slate-600 dark:text-slate-400">
      The page you are looking for does not exist or has been moved.
    </p>
    <div class="mt-6">
      <BaseButton variant="primary" size="md" @click="goHome"> Return to Dashboard </BaseButton>
    </div>
  </div>
</template>
