let date = new Date();
console.log(date);
// // Output: 2023-10-21T14:36:46.014Z

console.log(date.toString());
// // Output: Sat Oct 21 2023 20:08:06 GMT+0530 (India Standard Time)

console.log(date.toDateString());
// // Output: Sat Oct 21 2023

console.log(date.toISOString());
// // Output: 2023-10-21T14:39:44.620Z

console.log(date.toLocaleDateString())
// // Output: 21/10/2023

console.log(date.toJSON());
// // Output: 2023-10-21T14:39:44.620Z

console.log(date.toTimeString());
// // Output: 20:09:44 GMT+0530 (India Standard Time)

let MyDate = new Date(2023, 0, 21);
console.log(MyDate.toDateString());


let timeStamp = Date.now();
console.log(timeStamp);