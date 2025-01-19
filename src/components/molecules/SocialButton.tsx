import { ComponentPropsWithoutRef } from 'react'
import { Github } from 'lucide-react'

type SocialButtonProps = {
  provider: 'github' | 'google'
  fullWidth?: boolean
} & Omit<ComponentPropsWithoutRef<'button'>, 'children'>

export const SocialButton = ({
  provider,
  fullWidth = false,
  className = '',
  ...props
}: SocialButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors'
  const widthClass = fullWidth ? 'w-full' : ''

  const providerConfig = {
    github: {
      icon: <Github className="h-5 w-5" />,
      text: 'GitHubでログイン',
    },
    google: {
      icon: <img src="/api/placeholder/20/20" alt="" className="h-5 w-5" />,
      text: 'Googleでログイン',
    },
  } as const

  const { icon, text } = providerConfig[provider]

  return (
    <button
      type="button"
      className={`${baseStyles} ${widthClass} ${className}`}
      {...props}
    >
      {icon}
      <span>{text}</span>
    </button>
  )
}
