import { ComponentPropsWithoutRef } from 'react'

type Variant = 'primary' | 'secondary' | 'outline'
type Size = 'sm' | 'md' | 'lg'

type ButtonProps = {
  variant?: Variant
  size?: Size
  fullWidth?: boolean
} & ComponentPropsWithoutRef<'button'>

export const Button = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}: ButtonProps) => {
  const baseStyles =
    'rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    outline:
      'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  const widthClass = fullWidth ? 'w-full' : ''

  const classes = [
    baseStyles,
    variants[variant],
    sizes[size],
    widthClass,
    className,
  ].join(' ')

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
