import { Link } from 'react-router-dom'
import { useLogIn } from '../../lib/hooks/useLogIn'
import { TextField, ValidationMessage } from '../atoms'

export const LogIn = () => {
  const { email, errors, password, handleChange, handleSubmit } = useLogIn()
  return (
    <form onSubmit={handleSubmit}>
      <h2>ログイン画面</h2>
      <div>
        <label htmlFor="email">メールアドレス: </label>
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
      <div>
        <label htmlFor="password">パスワード: </label>
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
        <button type="submit">ログイン</button>
      </div>
      <Link to="/signup">既にアカウントをお持ちの方はこちら</Link>
    </form>
  )
}
