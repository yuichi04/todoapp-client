import { ChangeEvent, FormEvent, useState } from 'react'
import { useMutateAuth } from './useMutateAuth'
import { validateEmail, validatePassword } from '../utils/validations'

type ValidationError = {
  isError: boolean
  message: string
}
type FormErrors = {
  email: ValidationError
  password: ValidationError
}
type FormField = keyof FormErrors

const initialErrors: FormErrors = {
  email: {
    isError: false,
    message: '',
  },
  password: {
    isError: false,
    message: '',
  },
}

export const useLogIn = () => {
  const { loginMutation } = useMutateAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<FormErrors>(initialErrors)

  const validateForm = (): boolean => {
    const emailError = validateEmail(email, 'login')
    const passwordError = validatePassword(password, 'login')

    const newErrors: FormErrors = {
      ...initialErrors,
      email: emailError
        ? { isError: true, message: emailError }
        : initialErrors.email,
      password: passwordError
        ? { isError: true, message: passwordError }
        : initialErrors.password,
    }

    setErrors(newErrors)

    return !emailError && !passwordError
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) return

    loginMutation.mutate({ email, password })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>, field: FormField) => {
    const { value } = e.target
    const setters = { email: setEmail, password: setPassword }
    setters[field](value)
  }

  return { email, password, errors, handleChange, handleSubmit }
}
