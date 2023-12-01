// // Write a JavaScript function to get the number of occurrence of each letter in specified string....

function getOcurrece(str, searchStr) {
    let capWord = str.toLowerCase().split('');
    let count = 0;
    for (let i = 0; i < capWord.length; i++) {
        if (searchStr === capWord[i]) {
            count += 1;
        }
    }
    return count;

}

let str = "Hello I'm Samiran From Kolaghat";
console.log(getOcurrece(str, 'o'));