import axios from 'axios'
import { CsrfToken } from '../types'

// CSRFトークン取得
export const getCsrfToken = async () => {
  try {
    const { data } = await axios.get<CsrfToken>('/csrf')
    axios.defaults.headers.common['X-CSRF-TOKEN'] = data.csrf_token
  } catch (error) {
    console.error('Failed to fetch CSRF token:', error)
    throw error
  }
}
