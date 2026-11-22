<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/utils/cn'

interface Props {
  modelValue?: string | number
  type?: string
  placeholder?: string
  label?: string
  error?: string
  disabled?: boolean
  id?: string
  customClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  type: 'text',
  placeholder: '',
  label: '',
  error: '',
  disabled: false,
  id: '',
  customClass: '',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const inputClasses = computed(() =>
  cn(
    'w-full px-3.5 py-2 text-sm rounded-lg border bg-white dark:bg-slate-900 transition-colors focus:outline-none focus:ring-2 disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-slate-800',
    props.error
      ? 'border-red-500 text-red-900 focus:ring-red-400 dark:text-red-300'
      : 'border-slate-300 text-slate-900 focus:border-indigo-500 focus:ring-indigo-500/20 dark:border-slate-700 dark:text-slate-100',
    props.customClass,
  ),
)

function onInput(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="flex flex-col gap-1.5 text-left">
    <label v-if="label" :for="id" class="text-sm font-medium text-slate-700 dark:text-slate-300">
      {{ label }}
    </label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="inputClasses"
      @input="onInput"
    />
    <span v-if="error" class="text-xs text-red-600 dark:text-red-400">
      {{ error }}
    </span>
  </div>
</template>
