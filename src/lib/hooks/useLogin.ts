import { ChangeEvent, FormEvent, useState } from 'react'
import { useMutateAuth } from './useMutateAuth'
import { validatePassword } from '../utils/validations/password'
import { validateEmail } from '../utils/validations/email'

export const useLogin = () => {
  const { loginMutation } = useMutateAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<string[]>([])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setErrors([])

    e.preventDefault()
    const passwordError = validatePassword(password)
    const emailError = validateEmail(email)

    if (passwordError) {
      setErrors((prev) => [...prev, passwordError])
    }
    if (emailError) {
      setErrors((prev) => [...prev, emailError])
    }

    loginMutation.mutate({
      email,
      password,
    })
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: 'email' | 'password'
  ) => {
    const { value } = e.target

    switch (type) {
      case 'email':
        setEmail(value)
        break
      case 'password':
        setPassword(value)
        break
    }
  }

  return { email, errors, password, handleSubmit, handleChange }
}
