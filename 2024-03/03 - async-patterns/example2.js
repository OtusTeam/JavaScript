const main = () => {
    console.log('start'); // 

    const op = () => new Promise((res, reject) => {
        console.log('in promise'); // 
        reject(1)
    }).then((r) => {
        console.log(r); // 
    }).catch((e) => {
        console.log('err', e);
    });

    console.log('end') //

    try {
        op()
        // setTimeout(() => {
        //     throw Error('OMG')
        // }, 0)
    } catch {
        console.log('caught!')
    }
}

main();