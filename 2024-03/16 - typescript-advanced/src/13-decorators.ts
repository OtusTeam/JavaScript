// SEE: https://www.typescriptlang.org/docs/handbook/decorators.html#introduction
function first(type: Object) {
  console.log('first(): factory evaluated')
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    console.log('first(): called')
  }
}

function second(target: any, propertyName: string, descriptor: PropertyDescriptor) {
  console.log('second(): called')
  const realMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`function Name: ${propertyName}`);
    return realMethod.apply(this, args);
  };
}

class ExampleClass {
  @first(Number)
  @second
  method() {
    console.log('hello!')
  }
}

console.log('Create instance ExampleClass')
const example = new ExampleClass()
console.log('Call method')
example.method()
