export interface Item {
  id: string
  title: string
  description: string
  status: 'active' | 'archived'
  createdAt: string
}
