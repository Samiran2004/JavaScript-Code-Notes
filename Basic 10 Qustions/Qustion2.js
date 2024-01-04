// Write a function that checks whether a given string is a palindrome or not ?

function checkPalindrome(str) {
    let reversedStr = str.split("").reverse().join("");
    if (str == reversedStr) {
        console.log("Given string is a palindrome string.");
    } else {
        console.log("Given string is not a palindrome string.");
    }
}

const str = "SAAS";
checkPalindrome(str);