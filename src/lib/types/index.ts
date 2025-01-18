export type CsrfToken = {
  csrf_token: string
}

export type Credential = {
  email: string
  password: string
}

export type TodoResponse = {
  id: number
  title: string
  created_at: Date
  updated_at: Date
}
