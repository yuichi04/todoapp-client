import { useSignUp } from '../../lib/hooks/useSignUp'
import { Button, Label, TextField, ValidationMessage } from '../atoms'
import { Divider, SocialButton } from '../molecules'

export const SignUpForm = () => {
  const {
    email,
    errors,
    password,
    confirmPassword,
    handleChange,
    handleSubmit,
  } = useSignUp()

  const isEmailError = errors.email.isError
  const isPasswordError = errors.password.isError
  const isConfirmPasswordError =
    !isPasswordError && errors.confirmPassword.isError

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email">メールアドレス:</Label>
        <TextField
          id="email"
          type="email"
          value={email}
          onChange={(e) => handleChange(e, 'email')}
          isError={isEmailError}
        />
        {isEmailError && <ValidationMessage message={errors.email.message} />}
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">パスワード:</Label>
        <TextField
          id="password"
          type="password"
          value={password}
          onChange={(e) => handleChange(e, 'password')}
          isError={isPasswordError}
        />
        {isPasswordError && (
          <ValidationMessage message={errors.password.message} />
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="confirmPassword">確認用パスワード:</Label>
        <TextField
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => handleChange(e, 'confirmPassword')}
          isError={isConfirmPasswordError}
        />
        {isConfirmPasswordError && (
          <ValidationMessage message={errors.confirmPassword.message} />
        )}
      </div>
      <div className="pt-2">
        <Button type="submit" fullWidth>
          アカウントを作成する
        </Button>
      </div>
      <Divider text="または" />
      <div className="space-y-3">
        <SocialButton provider="github" fullWidth />
        <SocialButton provider="google" fullWidth />
      </div>
    </form>
  )
}
