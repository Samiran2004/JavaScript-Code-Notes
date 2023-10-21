const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(myArray[0]);

const hero = ["Spider Man", "Super Man", "Hulk", "Bat Man"];
const myArr = new Array(1, 2, 3, 4, 5);

console.log(hero[2]);
console.log(myArr[2]);

// // Array Methods..........

myArray.push(999);
myArray.push(99);

myArray.pop();

// myArray.unshift(5);
myArray.shift();
console.log(myArray);

console.log(hero.includes('Super Man'))

// // Slice and Splice

console.log("A ", myArray);
const myn1 = myArray.slice(1, 3);
console.log(myn1);