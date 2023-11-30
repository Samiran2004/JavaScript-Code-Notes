// // Write a function that checks whether a passed string is palindrome or not.........
function checkPalindrome(str) {
    let originalStr = str.toLowerCase();
    let reverseStr = originalStr.split('').reverse().join('');
    if (reverseStr === originalStr) {
        console.log(`${originalStr} is palindrome string.`);
    } else {
        console.log(`${originalStr} is not a palindrome string.`);
    }
}
let str = "Madam";
checkPalindrome(str);