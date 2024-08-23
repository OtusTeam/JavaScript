// See: https://youtu.be/c1rJema94iY?t=413

const getMaxCallStaskSize = (i) => {
    try {
        return getMaxCallStaskSize(++i)
    } catch {
        return i
    }
}

console.log(getMaxCallStaskSize(0))