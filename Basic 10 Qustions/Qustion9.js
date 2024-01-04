// Write a program to remove all whitespace character from a string...

function removeWhiteSpace(str) {
    let newStr = str.split("");
    let customizeStr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            customizeStr.push(str[i]);
        }
    }
    return customizeStr.join('');
}

const str = "Hello World";

console.log(removeWhiteSpace(str));