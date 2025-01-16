import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Auth } from './auth'
import { TodoItem } from './components/molecules'
import { useEffect } from 'react'
import { axiosConfig } from './config/axios'
import { getCsrfToken } from './lib/api/client'

const Router = () => {
  useEffect(() => {
    axiosConfig()
    getCsrfToken()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/todo" element={<TodoItem />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
