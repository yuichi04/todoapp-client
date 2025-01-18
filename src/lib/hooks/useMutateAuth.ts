import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { Credential } from '../types'
import { useError } from '../hooks/useError'
import useStore from '../../store'

export const useMutateAuth = () => {
  const navigate = useNavigate()
  const resetEditedTask = useStore((state) => state.resetEditedTask)
  const { switchErrorHandling } = useError()

  const loginMutation = useMutation({
    mutationFn: async (user: Credential) => await axios.post('/login', user),
    onSuccess: () => navigate('/todo'),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (err: any) =>
      switchErrorHandling(err.response.data.message || err.response.data),
  })

  const registerMutation = useMutation({
    mutationFn: async (user: Credential) => await axios.post('/signup', user),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (err: any) =>
      switchErrorHandling(err.response.data.message || err.response.data),
  })

  const logoutMutation = useMutation({
    mutationFn: async () => await axios.post('/logout'),
    onSuccess: () => {
      resetEditedTask()
      navigate('/')
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (err: any) => {
      switchErrorHandling(err.response.data.message || err.response.data)
    },
  })

  return { loginMutation, registerMutation, logoutMutation }
}
