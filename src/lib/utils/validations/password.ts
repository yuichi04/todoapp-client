import { z } from 'zod'
import { removeWhitespace } from '../format'

const passwordSchema = z
  .string()
  .min(1, 'パスワードを入力してください')
  .regex(/[A-Z]/, 'パスワードには大文字を含める必要があります')
  .regex(/[a-z]/, 'パスワードには小文字を含める必要があります')
  .regex(/[0-9]/, 'パスワードには数字を含める必要があります')
  .transform(removeWhitespace)
  .refine((val) => val.length >= 8, 'パスワードは8文字以上で入力してください')

export const validatePassword = (password: string): string => {
  const result = passwordSchema.safeParse(password)
  return result.success ? '' : result.error.errors[0].message
}
