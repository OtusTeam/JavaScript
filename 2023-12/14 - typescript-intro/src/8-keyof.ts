type Other = { x: number; y: number }
type P = keyof Other // 'x' | 'y'

const x: P = 'x'
const y: P = 'y'
// const c: P = 'z';
