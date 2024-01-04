// Write a function that checks whether two strings are anagrams or not ?

function anagram(str1, str2) {
    // const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
    const cleanStr1 = str1.toLowerCase();
    const cleanStr2 = str2.toLowerCase();

    return cleanStr1.split('').sort().join('') === cleanStr2.split('').sort().join('');
}

const str1 = "Listen";
const str2 = "Silent";

if (anagram(str1, str2)) {
    console.log(`${str1} and ${str2} are anagram`);
} else {
    console.log(`${str1} and ${str2} are not anagram`);
}