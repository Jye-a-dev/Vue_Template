import type { Item } from '../types'

export async function fetchExampleItems(): Promise<Item[]> {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 300))
  return [
    {
      id: '1',
      title: 'Feature-Based Modular Architecture',
      description:
        'Domain-driven folder isolation allowing multiple developers to collaborate without file conflicts.',
      status: 'active',
      createdAt: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'TanStack Vue Query Integration',
      description:
        'Declarative async state management with automatic caching, background revalidation, and garbage collection.',
      status: 'active',
      createdAt: new Date().toISOString(),
    },
    {
      id: '3',
      title: 'Strict Zod Runtime Validation',
      description:
        'Environment and domain payload validations to prevent malformed runtime inputs.',
      status: 'active',
      createdAt: new Date().toISOString(),
    },
  ]
}
