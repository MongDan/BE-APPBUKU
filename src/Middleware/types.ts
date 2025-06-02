export type UserPayload = {
  id: number
  email: string
  role: 'USER' | 'ADMIN'
  iat?: number
  exp?: number
}