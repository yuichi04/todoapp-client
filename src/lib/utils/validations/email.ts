import { z } from 'zod'
import { removeWhitespace } from '../format'

const schema = z
  .string()
  .min(1, 'メールアドレスを入力してください')
  .email('有効なメールアドレスを入力してください')
  .transform(removeWhitespace)

export const validateEmail = (email: string): string => {
  const result = schema.safeParse(email)
  return result.success ? '' : result.error.errors[0].message
}
