import { ComponentPropsWithoutRef, forwardRef } from 'react'

type TextFieldProps = {
  isError?: boolean
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ isError, className = '', ...props }, ref) => (
    <input
      ref={ref}
      className={`w-full px-3 py-2 border rounded-md ${
        isError
          ? 'border-red-300 focus:ring-red-500'
          : 'border-gray-300 focus:ring-blue-500'
      } focus:outline-none focus:ring-2 focus:border-transparent ${className}
    `}
      {...props}
    />
  )
)

TextField.displayName = 'TextField'
