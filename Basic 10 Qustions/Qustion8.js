// Write a function to check if a give number is prime or not ?

function checkPrime(num) {
    if (num <= 1) {
        return false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
}

const number = 7;

if (checkPrime(number)) {
    console.log(`${number} is a prime number.`);
} else {
    console.log(`${number} is not a prime number.`);
}