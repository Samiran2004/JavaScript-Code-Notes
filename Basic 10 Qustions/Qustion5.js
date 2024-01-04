// Write a function that returns the number of vowels in a string.

function numberOfVowels(str) {
    let count = 0;
    let vowels = ["a", "e", "i", "o", "u"];
    const splitStr = str.toLowerCase().split('');
    for (let i = 0; i < splitStr.length; i++) {
        if (vowels.includes(splitStr[i])) {
            count++;
        }
    }
    return count;
}

const str = "Samiran";

console.log(numberOfVowels(str));