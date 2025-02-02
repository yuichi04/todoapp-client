import { useEffect } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { axiosConfig } from './config/axios'
import { getCsrfToken } from './lib/api/csrf'
import { LogInPage, SignUpPage, TodoListPage } from './components/pages'

const Home = () => (
  <div className="p-4 space-x-2">
    <Link to="login" className="border p-2 bg-gray-50">
      LogIn
    </Link>
    <Link to="signup" className="border p-2 bg-gray-50">
      SignUp
    </Link>
  </div>
)

export const Router = () => {
  useEffect(() => {
    axiosConfig()
    getCsrfToken()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/todo" element={<TodoListPage />} />
      </Routes>
    </BrowserRouter>
  )
}
