// Write a function that returns the reverse of a string...

function reverseString(str) {
    let reverseStr = str.split("").reverse().join("");
    return (reverseStr);
}

const str = "Samiran";
console.log(reverseString(str));