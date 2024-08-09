const promises = () => {
  fetch("api.github.com/user/arswysocki")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const asyncawait = async () => {
  try {
    const response = await fetch("api.github.com/user/arswysocki");
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};
const cascade = () => {
  function walk(amount) {
    return new Promise((resolve, reject) => {
      if (amount < 500) {
        reject("the value is too small");
      }
      setTimeout(() => resolve(`you walked for ${amount}ms`), amount);
    });
  }

  walk(1000)
    .then((res) => {
      console.log(res);
      return walk(500);
    })
    .then((res) => {
      console.log(res);
      return walk(700);
    })
    .then((res) => {
      console.log(res);
      return walk(800);
    })
    .then((res) => {
      console.log(res);
      return walk(100);
    })
    .then((res) => {
      console.log(res);
      return walk(400);
    })
    .then((res) => {
      console.log(res);
      return walk(600);
    });
};

const helloAsyncAwait = () => {
  function walk(amount) {
    return new Promise((resolve, reject) => {
      if (amount < 500) {
        reject("the value is too small");
      }
      setTimeout(() => resolve(`you walked for ${amount}ms`), amount);
    });
  }

  // create an async function
  async function go() {
    // use the keyword `await` to wait for the response
    try {
      const res = await walk(500);
      console.log(res);
      const res2 = await walk(900);
      console.log(res2);
      const res3 = await walk(600);
      console.log(res3);
      const res4 = await walk(700);
      console.log(res4);
      const res5 = await walk(400);
      console.log(res5);
      console.log("finished");
    } catch (e) {
      console.log(e);
    }
  }

  go();
};

const errorHandling = () => {
  async function asyncFunc() {
    try {
      let response = await fetch("http:your-url");
    } catch (err) {
      console.log(err);
    }
  }

  asyncFunc();
};
