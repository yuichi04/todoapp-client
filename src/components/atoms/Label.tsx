import { ComponentPropsWithoutRef } from 'react'

export const Label = ({
  children,
  className = '',
  ...props
}: ComponentPropsWithoutRef<'label'>) => (
  <label
    className={`block text-sm font-medium text-gray-700 cursor-pointer ${className}`}
    {...props}
  >
    {children}
  </label>
)
