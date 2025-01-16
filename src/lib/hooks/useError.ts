import { useNavigate } from 'react-router-dom'
import useStore from '../../store'
import { ERROR_MESSAGES, ERROR_TYPES } from '../../constants/errors'
import { getCsrfToken } from '../api/client'

export const useError = () => {
  const navigate = useNavigate()
  const resetEditedTask = useStore((state) => state.resetEditedTask)

  const switchErrorHandling = (msg: string) => {
    switch (msg) {
      case ERROR_TYPES.INVALID_CSRF_TOKEN:
        getCsrfToken()
        alert(ERROR_MESSAGES[ERROR_TYPES.INVALID_CSRF_TOKEN])
        break
      case ERROR_TYPES.INVALID_JWT:
        alert(ERROR_MESSAGES[ERROR_TYPES.INVALID_JWT])
        resetEditedTask()
        navigate('/')
        break
      case ERROR_TYPES.DUPLICATE_KEY:
        alert(ERROR_MESSAGES[ERROR_TYPES.DUPLICATE_KEY])
        break
      case ERROR_TYPES.INVALID_PASSWORD:
        alert(ERROR_MESSAGES[ERROR_TYPES.INVALID_PASSWORD])
        break
      case ERROR_TYPES.RECORD_NOT_FOUND:
        alert(ERROR_MESSAGES[ERROR_TYPES.RECORD_NOT_FOUND])
        break
      default:
        alert(msg)
    }
  }
  return { switchErrorHandling }
}
