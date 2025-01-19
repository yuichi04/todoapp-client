import { SignUpForm } from '../organisms'
import { FormTemplate } from '../templates'

export const SignUp = () => {
  return (
    <FormTemplate
      heading="アカウント作成"
      content={<SignUpForm />}
      navigation={{ path: '/login', label: 'ログインはこちら' }}
    />
  )
}
