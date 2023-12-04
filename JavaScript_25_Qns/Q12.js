// // In an Array of numbers and strings, only add those members which are not string........

function addOnlyNumbers(arr) {
    let sum = 0;
    arr.forEach(element => {
        if (typeof (element) == 'number') {
            sum = sum + element;
        }
    });
    return sum;
}
let arr = ['Samiran', 12, 'Guddu', 12, 'KIDDO', 100];
console.log(addOnlyNumbers(arr));