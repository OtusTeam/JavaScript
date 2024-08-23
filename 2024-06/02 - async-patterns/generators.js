function* range() {
    for (let i = 0; i < 2; i++) {
        yield i;
    }
    yield "foo";
    // return undefined;
}
const getData = async (data) => data;
async function* doJob() {
    for (let x = 0; x < 3; x++) {
        const { user } = await getData({ user: 1 });
        const profile = await getData({ age: 1 });
        yield { [user]: profile }
    }
}

// const it = range();
// const interval = setInterval(() => {
//     const {value, done} = it.next();
//     if(done) {
//         console.log('finished');
//         clearInterval(interval);
//     } else {
//         console.log(value);
//     }

// }, 1000)
const main = async () => {
    const it2 = doJob();
    it2.next().then(console.log);
    // for await (const i of it2) {
    //     console.log(i)
    // }
}

main();