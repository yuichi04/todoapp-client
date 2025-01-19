import { LogInForm } from '../organisms'
import { FormTemplate } from '../templates'

export const LogIn = () => (
  <FormTemplate
    heading="ログイン"
    content={<LogInForm />}
    navigation={{
      path: '/signup',
      label: '既にアカウントをお持ちの方はこちら',
    }}
  />
)
