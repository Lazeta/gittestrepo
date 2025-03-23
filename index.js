function greeting(name) {
    console.log(`Hello ${name}! How are you?`);
}

greeting('John');

function addOddNumbers(a, b) {
    if (a % 2 !== 0 || b % 2 !== 0) {
        return a + b;
    }
}

addOddNumbers(2, 3);