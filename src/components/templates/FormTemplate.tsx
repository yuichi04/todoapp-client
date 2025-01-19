import { ReactNode } from 'react'
import { Header } from '../organisms'
import { Link } from 'react-router-dom'

type Navigation = {
  path: string
  label: string
}

type FormTemplateProps = {
  heading: string
  content: ReactNode
  navigation: Navigation
}

export const FormTemplate = ({
  heading,
  content,
  navigation,
}: FormTemplateProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto border rounded-md p-8 bg-white shadow-sm">
          <h2 className="text-xl font-bold mb-4">{heading}</h2>
          <div className="mb-6">{content}</div>
          <div className="text-right">
            <Link
              to={navigation.path}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
            >
              {navigation.label}
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
