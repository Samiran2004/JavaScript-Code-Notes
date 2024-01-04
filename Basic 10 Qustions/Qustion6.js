// Write a function to find the largest number in an array..

function findLargestNumber(arr) {
    let sortedArr = arr.sort();
    let largestNumber = sortedArr[arr.length - 1];
    return largestNumber;
}

let arr = [1, 2, 22, 4, 55, 6, 8, 99];
console.log(findLargestNumber(arr));