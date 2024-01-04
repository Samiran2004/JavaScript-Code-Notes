// Write a function that returns the longest word in the sentence...

function findLongestWord(sentence) {
    let words = sentence.split(" ");
    let longestWord = "";
    for (let i = 0; i < words.length; i++) {
        if (longestWord.length < words[i].length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}

const sentence = "I love coding in Javascript";
console.log(findLongestWord(sentence));