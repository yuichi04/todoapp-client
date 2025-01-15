import axios from 'axios'
import { API_URL } from './constants'

export const axiosConfig = () => {
  axios.defaults.withCredentials = true
  axios.defaults.baseURL = API_URL
}
