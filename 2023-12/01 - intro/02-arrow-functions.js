function greetingF(name) {
    return "hello " + name;
}
const greeting = function(name) {
    return "hello " + name;
}

const greetingArrow = (name) => {
    return `hello ${name}`;
}

const greetingArrow2 = name => {
    return `hello ${name}`;
}

const greeting3 = () => {
    return "hello";
}

const greeting4 = name => `hello ${name}`;
const fReturnsObject = () => ({
        a: 0,
});


const race = "100m dash";
const runners = [ "Usain Bolt", "Justin Gatlin", "Asafa Powell" ];

// Возврат объекта
const results = runners
    .map(
        (runner, i) =>  
            ({ name: runner, race, place: i + 1})
    );

console.log(results);