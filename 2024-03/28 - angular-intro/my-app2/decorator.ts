
// Calls decorator
function ReadOnlyClass(target: Function) {

}

function log (target: any, method: string, descriptor: PropertyDescriptor) {
  const oldMethod = descriptor.value;
  descriptor.value = (value: number) => {
    console.log(`call mthod ${method}`);
    return oldMethod(value);
  }
}


class MyClass {

  @log
  method (input: number) {


    if (input > 3) {
      return 100
    } else {
      return input;
    }
  }
}

console.log(new MyClass().method(10));
