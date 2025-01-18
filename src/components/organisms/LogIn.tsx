import { useLogin } from '../../lib/hooks/useLogin'
import { ErrorMessages } from '../molecules'

export const LogIn = () => {
  const { email, errors, password, handleChange, handleSubmit } = useLogin()
  return (
    <form onSubmit={handleSubmit}>
      <h2>ログイン画面</h2>
      <ErrorMessages errors={errors} />
      <div>
        <label htmlFor="email">メールアドレス: </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => handleChange(e, 'email')}
        />
      </div>
      <div>
        <label htmlFor="password">パスワード: </label>
        <input
          id="password"
          type="password"
          placeholder="半角英数6文字以上"
          value={password}
          onChange={(e) => handleChange(e, 'password')}
        />
      </div>
      <button type="submit">ログイン</button>
    </form>
  )
}
