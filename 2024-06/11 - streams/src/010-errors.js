class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

class NotValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotValidationError";
  }
}

// Наследование ошибок
// Error - общий класс ошибок
// Есть ошибки-ошибки, ожидаемые ошибки(исключение)

;(async() => {
  try {
    throw new ValidationError('val err')
  } catch(err) {
    console.log('instanceof Error', err instanceof Error) // true
    console.log('instanceof ValidationError', err instanceof ValidationError) // true
     // false
    console.log('instanceof NotValidationError', err instanceof NotValidationError)

    console.error(err)
  }
})()
