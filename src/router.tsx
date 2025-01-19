import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LogIn, SignUp } from './components/organisms'
import { TodoItem } from './components/molecules'
import { useEffect } from 'react'
import { axiosConfig } from './config/axios'
import { getCsrfToken } from './lib/api/csrf'

const Router = () => {
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

export default Router
