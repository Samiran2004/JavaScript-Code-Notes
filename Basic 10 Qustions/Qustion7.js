// Write a function to calculate the factorial of a number...

function factorial(num) {
    if (num == 0) {
        return 1
    }
    return num * factorial(num - 1);
}

const num = 10;
console.log(factorial(num));