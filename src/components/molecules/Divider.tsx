type DividerProps = {
  text?: string
  className?: string
}

export const Divider = ({ text, className = '' }: DividerProps) => {
  return (
    <div className={`relative my-6 ${className}`}>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300" />
      </div>
      {text && (
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-2 text-gray-500">{text}</span>
        </div>
      )}
    </div>
  )
}
