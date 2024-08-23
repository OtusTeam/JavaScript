function my (target: any, key: any, descriptor: any){
  const oldMethod = descriptor.value;

  descriptor.value = (arg: any) => {
    const result = oldMethod(arg);
    console.log(`method returns ${result}`)

    if (result < 1) {
      return null;
    }

    return result;
  }
}


class A {
  @my
  method(num: number) {
    return num;
  }
}

new A().method(1);
