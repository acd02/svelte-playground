type Item = {
  label?: string
  value: Record<string | number, unknown> | string | boolean | number | unknown[]
}
type User = {
  email: string
  id: number
}

const users: User[] = [
  { email: 'one', id: 1 },
  { email: 'two', id: 2 },
]

export const items: Item[] = [{ label: 'users', value: users }]
