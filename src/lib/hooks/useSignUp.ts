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
  confirmPassword: ValidationError
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
  confirmPassword: {
    isError: false,
    message: '',
  },
}

export const useSignUp = () => {
  const { registerMutation } = useMutateAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState<FormErrors>(initialErrors)

  const validateForm = (): boolean => {
    const emailError = validateEmail(email, 'signup')
    const passwordError = validatePassword(password, 'signup')
    const confirmPasswordError = confirmPassword !== password

    const newErrors: FormErrors = {
      ...initialErrors,
      email: emailError
        ? { isError: true, message: emailError }
        : initialErrors.email,
      password: passwordError
        ? { isError: true, message: passwordError }
        : initialErrors.password,
      confirmPassword: confirmPasswordError
        ? { isError: true, message: 'パスワードが一致しません' }
        : initialErrors.confirmPassword,
    }

    setErrors(newErrors)
    return !emailError && !passwordError && !confirmPasswordError
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateForm()) return

    registerMutation.mutate({ email, password })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>, field: FormField) => {
    const { value } = e.target
    const setters = {
      email: setEmail,
      password: setPassword,
      confirmPassword: setConfirmPassword,
    }
    setters[field](value)
  }

  return {
    email,
    password,
    confirmPassword,
    errors,
    handleChange,
    handleSubmit,
  }
}
