const marvel_heros = ['Iron Man', 'thor', 'spider man'];
const dc_heros = ['super man', 'flash', 'batman'];
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// const newHeros = marvel_heros.concat(dc_heros);
// console.log(newHeros);

// // Sprade operator
// const allHeros = [...marvel_heros, ...dc_heros];
// console.log(allHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const newAnotherArray = anotherArray.flat(Infinity);
console.log(newAnotherArray);

console.log(Array.isArray("Samiran"));
console.log(Array.from("Samiran"));
console.log(Array.from({ name: "Samiran" }));

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));