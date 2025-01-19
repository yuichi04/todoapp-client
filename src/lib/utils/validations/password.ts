import { z } from 'zod'
import { removeWhitespace } from '../format'

type ValidationMode = 'signup' | 'login'

const errorMessages = {
  signup: {
    required: 'パスワードを入力してください',
    uppercase: 'パスワードには大文字を含める必要があります',
    lowercase: 'パスワードには小文字を含める必要があります',
    number: 'パスワードには数字を含める必要があります',
    minLength: 'パスワードは8文字以上で入力してください',
  },
  login: {
    required: 'パスワードを入力してください',
    format: '無効なパスワード形式です',
  },
} as const

const createPasswordSchema = (mode: ValidationMode) => {
  // 基本のスキーマ
  const baseSchema = z.string().min(1, errorMessages[mode].required)

  if (mode === 'signup') {
    return baseSchema
      .regex(/[A-Z]/, errorMessages.signup.uppercase)
      .regex(/[a-z]/, errorMessages.signup.lowercase)
      .regex(/[0-9]/, errorMessages.signup.number)
      .transform(removeWhitespace)
      .refine((val) => val.length >= 8, errorMessages.signup.minLength)
  }

  // ログイン用のスキーマ
  return baseSchema.transform(removeWhitespace)
}

export const validatePassword = (
  password: string,
  mode: ValidationMode
): string => {
  const schema = createPasswordSchema(mode)
  const result = schema.safeParse(password)
  return result.success ? '' : result.error.errors[0].message
}
