interface Vector {
  length: number
}

class Vector2 implements Vector {
  constructor(
    private x: number,
    private y: number,
  ) {}

  get length(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2)
  }
}

class VectorSimple2 {
  constructor(
    private x: number,
    private y: number,
  ) {}

  get length(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2)
  }
}

class Vector3 implements Vector {
  constructor(
    private x: number,
    private y: number,
    private z: number,
  ) {}

  get length(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2)
  }
}

class VectorN implements Vector {
  _coordinates: number[]

  constructor(...args: number[]) {
    this._coordinates = args
  }

  get length(): number {
    let sum = 0
    for (const c of this._coordinates) {
      sum += c ** 2
    }
    return Math.sqrt(sum)
  }
}

class VectorSimple3 {
  constructor(
    private x: number,
    private y: number,
    private z: number,
  ) {}

  get length(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2)
  }
}

const showLength = (vector: Vector) => {
  console.log(`Length: ${vector.length}`)
}

const v2 = new Vector2(2, 2)
const vs2 = new VectorSimple2(2, 2)
const v3 = new Vector3(3, 3, 3)
const vs3 = new VectorSimple3(3, 3, 3)
const vector6 = new VectorN(1, 2, 3, 4, 5, 6)

showLength(v2)
showLength(vs2)
showLength(v3)
showLength(vs3)
showLength(vector6)