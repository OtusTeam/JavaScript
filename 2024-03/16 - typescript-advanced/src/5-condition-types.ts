function numId<
  ParamType,
  ResultType = ParamType extends number ? number : string,
>(x?: ParamType): ResultType

function numId(x?: number) { // x: number | undefined
  return x ?? 'Please pass param' 
  // x === null || x === undefined ? 'Please pass param' : x
}

const a = numId() // <-- string
const b = numId(1) // <-- number

/**
 * как правильно реализовать кейс, когда мне 
 * нужно изменить название/наличие ключа в интерфейсе 
 * в зависимости от типа, переданного в дженерик?
 */

interface DarkTheme {
  isDark: true
  header: string
}

interface LightTheme {
  isDark: false
  header: number
  footer: string
}

function setTheme<
  T extends 'light' | 'dark',
  Params extends LightTheme | DarkTheme = T extends 'light' ? LightTheme : DarkTheme,
>(theme: T): Params {
  if (theme === 'light') {
    return {
      isDark: false,
      header: 1,
      footer: ''
    } as Params
  }

  return {
    isDark: true,
    header: ''
  } as Params
}

const paramsLight = setTheme('light')
const paramsDark = setTheme('dark')