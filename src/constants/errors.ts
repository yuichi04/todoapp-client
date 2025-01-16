export const ERROR_TYPES = {
  INVALID_CSRF_TOKEN: 'invalid csrf token',
  INVALID_JWT: 'invalid or expired jwt',
  MALFORMED_JWT: 'missing or malformed jwt',
  DUPLICATE_KEY: 'duplicated key not allowed',
  INVALID_PASSWORD:
    'crypto/bcrypt: hashedPassword is not the hash of the given password',
  RECORD_NOT_FOUND: 'record not found',
} as const

export const ERROR_MESSAGES = {
  [ERROR_TYPES.INVALID_CSRF_TOKEN]: 'CSRF token is invalid, please try again',
  [ERROR_TYPES.INVALID_JWT]: 'access token expired, please login',
  [ERROR_TYPES.MALFORMED_JWT]: 'access token is not valid, please login',
  [ERROR_TYPES.DUPLICATE_KEY]: 'email already exist, please use another one',
  [ERROR_TYPES.INVALID_PASSWORD]: 'password is not correct',
  [ERROR_TYPES.RECORD_NOT_FOUND]: 'email is not correct',
} as const
