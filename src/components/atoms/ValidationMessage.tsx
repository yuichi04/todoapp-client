import { AlertCircle } from 'lucide-react'

type ValidationMessageProps = {
  message: string
  className?: string
}
export const ValidationMessage = ({
  message,
  className = '',
}: ValidationMessageProps) => (
  <div className={`flex items-start gap-1 mt-1.5 ${className}`}>
    <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
    <span className="text-sm text-red-600">{message}</span>
  </div>
)
