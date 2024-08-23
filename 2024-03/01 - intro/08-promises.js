const simple = () => {
  const data = fetch("your-api-url-goes-here");
  console.log("Finished");
  console.log(data);

  // коллбек хелл
  const makePizza = (ingredients, callback) => {
    mixIngredients(ingredients, function (mixedIngredients) {
      bakePizza(mixedIngredients, function (bakedPizza) {
        console.log("finished!"); // пирамида ужаса колбеков
      });
    }); // грустный бородатый джаваскриптер
  };
};

const helloPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    resolve("The value we get from the promise");
  });

  myPromise.then((data) => {
    console.log(data);
  });

  const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(Error("this is our error"));
    }, 2000);
  });

  myPromise2
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });
};
const chainedPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    resolve();
  });

  myPromise
    .then((data) => {
      return "working...";
    })
    .then((data) => {
      console.log(data);
      throw "failed!";
    })
    .catch((err) => {
      console.error(err);
    });
};

const resolveReject = () => {
  //Promise.resolve()
  Promise.resolve("Success").then(
    function (value) {
      console.log();
      // "Success"
    },
    function (value) {
      cnsole.log("fail");
    }
  );

  // Promise.reject()
  Promise.reject(new Error("fail")).then(
    function () {},
    function (error) {
      console.log(error);
      // Error: fail
    }
  );
};

const combiningPromises = () => {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "first value");
  });
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "second value");
  });

  promise1.then((data) => {
    console.log(data);
  });
  // after 500 ms
  // first value
  promise2.then((data) => {
    console.log(data);
  });
  // after 1000 ms
  // second value


  const promise11 =  new Promise((resolve,reject) => {
    setTimeout(resolve, 500, 'first value');
  });
  const promise21 =  new Promise((resolve,reject) => {
    setTimeout(resolve, 1000, 'second value');
  });
  
  Promise
    .all([promise11, promise21])
    .then(data => {
      const[promise1data, promise2data] = data;
      console.log(promise1data, promise2data);
    });
};
