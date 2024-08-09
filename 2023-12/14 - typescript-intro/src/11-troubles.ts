const data: (string | number | undefined)[] = [
  10,
  10,
  20,
  '3',
  undefined,
  55,
  '5555',
]

const numbers = data.filter((item): item is number => {
  return typeof item === 'number'
}) // as number[]
const strings = data.filter((item): item is string => {
  return typeof item === 'string'
}) // as string[]
console.log('onlyNumbers', numbers)
console.log('onlyStrings', strings)
