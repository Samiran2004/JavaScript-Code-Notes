// // Write a JavaScript function that returns a passed string with letters in alphabetical order.....

function alphabeticalOrderString(str){
    newWord = str.toLowerCase().split('').sort().join('');
    console.log(newWord);
}
let word = "Samiran";
alphabeticalOrderString(word);