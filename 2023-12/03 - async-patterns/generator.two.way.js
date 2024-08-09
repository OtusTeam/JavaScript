function* sayWhat() {
    console.log(yield);
    console.log("World");
  }
  const it = sayWhat();
  it.next();
  it.next("Hello");
  