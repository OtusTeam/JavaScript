

function someFunctionToDo(a, b, c) {
    console.log(a, b, c);
}


const arrowFun = (a, b, c) => {
    console.log('hi, i\'m arrow');
    console.log(a, b, c);
}


function innerFun1() {
    console.log(this);
}

const innerFun2 = () => console.log(this)
const obj1 = {
    a: 1,
    b: 2,
    do: innerFun1
}

const obj2 = {
    a: 1,
    b: 2,
    do: innerFun2
}


const add2Nums = (a, b) => {
    return a + b;
}

/**
 * 
 * @param {number} a первый аргумент
 * @param {string} b второй аргумент
 * @returns {string}
 */
function signDemo(a, b) {
    return a - b;
}

// someFunctionToDo(1,2,'asfsafsaf');
// arrowFun(1,2,'asfsafsaf');
innerFun1();
innerFun2();
console.log('---------------');
obj1.do();

obj2.do();

console.log(add2Nums(111, 2222));

signDemo('f', 'f');

console.log([1, 2, 3].filter.length)

function alpha(beta, ghamma, zetta, ...args) {
    console.log(beta, ghamma, zetta);
    console.log('Все остальное')
    console.log(args);
    console.log('args args', arguments);
}


function checkArguments() {
    for (let o of arguments) {
        console.log('+')
        console.log(o);
    }
}


const arrow2 = () => { };

console.log(alpha.length);

alpha(1, 2, 3, 4, 5, 6, 7);

console.log('---------------');
checkArguments(2221, 442, 553, 4124124, 5124, 62);
arrow2();



const fact1 = (n) => {
    let res = 1;

    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}

const fact2 = (n) => {
    if (n <= 1) {
        return 1;
    }

    return n * fact2(n - 1);
}

console.log('---------------');
console.log('---------------');

console.log(fact1(6));
console.log(fact2(6));



const ack = (m, n) => {
    if (m === 0 && n === 0) {
        return 1;
    }

    if (m === 0)
        return n + 1;

    if (n === 0) {
        return ack(m - 1, 1);
    }

    return ack(m - 1, ack(m, n - 1))
}

console.log('---------------');
console.log('---------------');
console.log(ack(1, 1));
console.log(ack(3, 1));
console.log(ack(3, 5));


const inLine = (obj) => {

    process.stdout.write("{ ");

    for (let k of Object.keys(obj)) {
        if (typeof obj[k] !== 'object') {
            process.stdout.write(`[${k}: ${obj[k]}], `);
        }
        else {
            process.stdout.write(`[${k}: `);
            inLine(obj[k]);

            process.stdout.write(`], `);
        }
    }

    process.stdout.write("} ");
}



inLine({
    a: 1,
    b: "sfasf",
    c: { d: 4, e: "afsasf" },
    f: true

});
console.log('---------------');
const arrOfNumbers = [1, 1, -13, 44, 42, 4, -4]
console.log(arrOfNumbers.sort((a, b) => {
    if (a % 2 == 0 && b % 2 == 0) {
        return a - b;
    }
    if (a % 2 == 0) {
        return -1;
    }
    return 1;

}))

console.log(arrOfNumbers.filter(x => x % 3 == 0));


let localStorage = ''

const add2 = (a, b) => {

    localStorage += a + b;

    console.log(new Date());
    return a + b;
}

console.log('---------------');
console.log(add2(1, 1000))
console.log(add2(1, 1000))
console.log(localStorage);



console.log(add2(1, 1000))

console.log(add2(1, 1000))

console.log(localStorage);



const addClear = (a, b) => {
    return a + b;
}

const clauseDemo = () => {

    let hello1 = 'Hello, ';

    return (name) => console.log(hello1 + name);
}

const hello = clauseDemo();

hello('Edgar');

hello('Andrew');


hello('Anton');



const memo = (fn, cache = new Map) => {
    return (a) => {
        if (cache.get(a)) {

            console.log('cached');
            return cache.get(a);
        }

        const res = fn(a);

        cache.set(a, res);
        return res;
    }
}

const superFun = (a) => {

    console.log('long execution');
    return a * a;
}



console.log('---------------');

console.log('Before execution');

console.log(superFun(20));

console.log(superFun(20));


console.log('After execution');

const memoSuperFun = memo(superFun);

console.log(memoSuperFun(20));

console.log(memoSuperFun(20));


const braces1 = (a) => "[" + a + "]";

const braces2 = (a) => "(" + a + ")";

const braces3 = (a) => "{" + a + "}";

const pipe = (...fns) => x => fns.reduce((v, fn) => fn(v), x)

const compose = (...fns) => x => fns.reduceRight((v, fn) => fn(v), x)


// braces1(braces2(braces3('otus '))))
console.log(compose(braces1, braces2, braces3)(' otus1 '));

console.log(pipe(braces1, braces2, braces3)(' otus2 '));



console.log('---------------');

const partial = (fn, ...apply) => (...args) => fn(...apply, ...args);

const mul = (...args) => args.reduce((a, b) => a * b, 1);

const partialmul = partial(mul, 11, 2);


console.log(partialmul(2, 4));


const curry = (fn) => {
    const curried = (...args) => {
        if (fn.length <= args.length) {
            return fn(...args);
        } else {
            return (...args2) =>  curried(...args.concat(args2));
            
        }
    }
    return curried;
}


const sum3 = (x, y, z) => x + y + z;

const curSum3 = curry(sum3);

console.log('-------');
console.log(curSum3(1, 2)(3))
console.log(curSum3(1)(2)(3));
console.log(curSum3(1, 2, 3));
console.log(curSum3(1)(2,3));

