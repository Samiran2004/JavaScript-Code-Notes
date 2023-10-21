const name = "Samiran";
const repoCount = 50;
console.log(name + repoCount + "Value")

// // String interpolution.............
console.log(`Hello my name is ${name} my repo count is ${repoCount}`);

const gameName = new String('BGMI-Battlegrounds Mobile India');
console.log(gameName);

console.log(gameName[0]);
console.log(gameName.__proto__);

//To calculate the length of the string........
console.log(gameName.length);

//To chamge the string into lowercase..........
console.log(gameName.toLocaleLowerCase());

//To find a char at which positon in the string...
console.log(gameName.charAt(2))

// //Find the index.........
console.log(gameName.indexOf('I'));

const newString = gameName.substring(0, 5);
console.log(newString);

const anotherString = gameName.slice(-4, 4);
console.log(anotherString);

const NewStringOne = "       SAmiran        ";
console.log(NewStringOne);

// //Trim will remove spaces
console.log(NewStringOne.trim());

const url = "https://samiran.com/samiran%20samanta";
console.log(url.replace('%20', '-'));

console.log(url.includes('samiran'));
console.log(url.includes('sam'));
console.log(url.includes('guddu'));

// // Convert into array.....
console.log(gameName.split('-'));
console.log(url.split('/'));

/*

slice():
         returns a part of a string between two indexes.

toUpperCase():
         returns the string converted to uppercase.

toLowerCase():
         returns the string converted to lowercase.

indexOf():
         returns the position of the first occurrence of a substring in a string.

lastIndexOf():
         returns the position of the last occurrence of a substring in a string.

replace():
         replaces a substring with another substring in a string.

split():
         splits a string into an array of substrings using a separator.

concat():
         joins two or more strings together.

*/