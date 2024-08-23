let car1 = new Promise((_, reject) =>
    setTimeout(reject, 3000, "Car 1 Crashed.")
);
let car2 = new Promise(resolve => setTimeout(resolve, 1000, "Car 2."));
let car3 = new Promise(resolve => setTimeout(resolve, 3000, "Car 3."));

Promise.race([car1, car2, car3])
    .then(value => {
        console.log("Promise Resolved", value);
    })
    .catch(err => {
        console.log("Promise Rejected", err);
    });