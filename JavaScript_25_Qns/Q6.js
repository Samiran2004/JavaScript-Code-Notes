// // Write a JavaScript function that reverse a number........

function reverseNum(num) {
    let reverseStr = String(num).split('').reverse().join('');
    let revNum = Number(reverseStr);
    console.log(revNum);
}
let num = 721154;
reverseNum(num);