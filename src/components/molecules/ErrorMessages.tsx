type ErrorMessagesProps = {
  errors: string[]
}

export const ErrorMessages = ({ errors }: ErrorMessagesProps) => {
  if (errors.length === 0) return null
  return (
    <ul>
      {errors.map((error) => (
        <li key={error}>{error}</li>
      ))}
    </ul>
  )
}
