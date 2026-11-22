import { useQuery } from '@tanstack/vue-query'
import { fetchExampleItems } from '../api'

export function useExampleQuery() {
  return useQuery({
    queryKey: ['example-items'],
    queryFn: fetchExampleItems,
  })
}
