// // How to check if a number is an integer..........

function checkInteger(num) {
    if (Number.isInteger(num)) {
        return true;
    } else {
        return false;
    }
}
let num = 12.3;
if (checkInteger(num)) {
    console.log(`${num} is an integer.`);
} else {
    console.log(`${num} is not an integer.`);
}