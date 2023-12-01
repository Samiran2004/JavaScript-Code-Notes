// // Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.....


function upperCaseStr(str) {
    let splitWords = str.split(' ');
    let capitalizedWords = splitWords.map((word) => {
        word.charAt(0).toUpperCase() + word.substring(1)
    });
    let result = capitalizedWords.join(' ');
    console.log(result);
}

let str = "hello i'm samiran";
upperCaseStr(str);
