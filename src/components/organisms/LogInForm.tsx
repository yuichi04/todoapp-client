import { useLogIn } from '../../lib/hooks/useLogIn'
import { Button, Label, TextField, ValidationMessage } from '../atoms'
import { SocialButton, Divider } from '../molecules'

export const LogInForm = () => {
  const { email, errors, password, handleChange, handleSubmit } = useLogIn()
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email">メールアドレス:</Label>
        <TextField
          id="email"
          type="email"
          value={email}
          onChange={(e) => handleChange(e, 'email')}
          isError={errors.email.isError}
        />
        {errors.email.isError && (
          <ValidationMessage message={errors.email.message} />
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">パスワード:</Label>
        <TextField
          id="password"
          type="password"
          value={password}
          onChange={(e) => handleChange(e, 'password')}
          isError={errors.password.isError}
        />
        {errors.password.isError && (
          <ValidationMessage message={errors.password.message} />
        )}
      </div>
      <div>
        <Button type="submit" fullWidth>
          ログインする
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
