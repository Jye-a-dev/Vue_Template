import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const isSidebarOpen = ref(false)
  const theme = ref<'light' | 'dark'>('light')

  function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value
  }

  function setTheme(newTheme: 'light' | 'dark') {
    theme.value = newTheme
  }

  return {
    isSidebarOpen,
    theme,
    toggleSidebar,
    setTheme,
  }
})
