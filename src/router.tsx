import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TodoItem } from './components/molecules'
import { axiosConfig } from './config/axios'
import { getCsrfToken } from './lib/api/csrf'
import { LogIn, SignUp } from './components/pages'

export const Router = () => {
  useEffect(() => {
    axiosConfig()
    getCsrfToken()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todo" element={<TodoItem />} />
      </Routes>
    </BrowserRouter>
  )
}
