import { SignUpForm } from '../organisms'
import { FormTemplate } from '../templates'

export const SignUpPage = () => {
  return (
    <FormTemplate
      heading="アカウント作成"
      content={<SignUpForm />}
      navigation={{
        path: '/login',
        label: '既にアカウントをお持ちの方はこちら',
      }}
    />
  )
}
