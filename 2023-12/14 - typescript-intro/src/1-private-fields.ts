class Point {
  constructor(
    private x: number,
    private y: number = 0,
  ) {}

  get length(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2)
  }
}

// const p = new Point(3, 2)
// p.y = 4
// console.log(p.y)
// console.log(p.length)







class PointVanilla {
  #x: number
  #y: number

  constructor(x: number, y: number = 0) {
    this.#x = x
    this.#y = y
  }

  get length(): number {
    return Math.sqrt(this.#x ** 2 + this.#y ** 2)
  }
}

const pv = new PointVanilla(3, 2)
// @ts-expect-error
pv.#y = 4
// @ts-expect-error
console.log(p.#y)
console.log(pv.length)
