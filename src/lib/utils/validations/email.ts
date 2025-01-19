import { z } from 'zod'
import { removeWhitespace } from '../format'

type ValidationMode = 'signup' | 'login'

const errorMessages = {
  signup: {
    required: 'メールアドレスを入力してください',
    format: '有効なメールアドレスを入力してください',
  },
  login: {
    required: 'メールアドレスを入力してください',
    format: '有効なメールアドレスを入力してください',
  },
} as const

const createEmailSchema = (mode: ValidationMode) => {
  return z
    .string()
    .min(1, errorMessages[mode].required)
    .email(errorMessages[mode].format)
    .transform(removeWhitespace)
}

export const validateEmail = (email: string, mode: ValidationMode): string => {
  const schema = createEmailSchema(mode)
  const result = schema.safeParse(email)
  return result.success ? '' : result.error.errors[0].message
}
