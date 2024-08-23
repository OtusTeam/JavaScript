const prms = new Promise((resolve, reject) => {
    reject(1);
});



const prms2 = Promise.reject(1);
const doSmthWithFileContents = (path) => {
    if(!fs.exists(path)) {
        return Promise.reject('NO SUCH FILE')
    }
    return fs.readFile(path).then((file) => {
        // some code
    })
}