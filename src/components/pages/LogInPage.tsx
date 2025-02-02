import { LogInForm } from '../organisms'
import { FormTemplate } from '../templates'

export const LogInPage = () => (
  <FormTemplate
    heading="ログイン"
    content={<LogInForm />}
    navigation={{
      path: '/signup',
      label: 'まだアカウントをお持ちでない方はこちら',
    }}
  />
)
