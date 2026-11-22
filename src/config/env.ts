import { z } from 'zod'

const envSchema = z.object({
  VITE_PORT: z.coerce.number().default(5000),
  VITE_API_BASE_URL: z.string().url().default('http://localhost:8000/api'),
})

const parsed = envSchema.safeParse({
  VITE_PORT: import.meta.env.VITE_PORT,
  VITE_API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
})

if (!parsed.success) {
  console.error('Invalid environment variables:', parsed.error.format())
  throw new Error('Environment variable validation failed')
}

export const env = parsed.data
