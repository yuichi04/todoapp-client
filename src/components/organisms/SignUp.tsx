import { Link } from 'react-router-dom'
import { useSignUp } from '../../lib/hooks/useSignUp'
import { TextField, ValidationMessage } from '../atoms'

export const SignUp = () => {
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
    <form onSubmit={handleSubmit}>
      <h2>アカウント作成画面</h2>
      <div>
        <label htmlFor="email">メールアドレス: </label>
        <TextField
          id="email"
          type="email"
          value={email}
          onChange={(e) => handleChange(e, 'email')}
          isError={isEmailError}
        />
        {isEmailError && <ValidationMessage message={errors.email.message} />}
      </div>
      <div>
        <label htmlFor="password">パスワード: </label>
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
      <div>
        <label htmlFor="confirmPassword">確認用パスワード: </label>
        <TextField
          id="confirmPassword"
          type="confirmPassword"
          value={confirmPassword}
          onChange={(e) => handleChange(e, 'confirmPassword')}
          isError={isConfirmPasswordError}
        />
        {isConfirmPasswordError && (
          <ValidationMessage message={errors.confirmPassword.message} />
        )}
      </div>
      <div>
        <button type="submit">アカウント作成</button>
      </div>
      <Link to="/login">ログインはこちら</Link>
    </form>
  )
}
