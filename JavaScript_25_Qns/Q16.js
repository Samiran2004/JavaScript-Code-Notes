// // Write a JavaScript function to get the first element of an Array. Passing a parameter 'n' will return the first 'n' elements of the array.....

function getFirstElementOfAnArray(arr, index = 0) {
    if (index > arr.length) {
        return "INVALID Index.";
    } else {

        if (index == 0) {
            return arr[0];
        } else {
            let newArr = [];
            for (let i = 0; i < index; i++) {
                newArr.push(arr[i]);
            }
            return newArr;
        }
    }
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let index = 14;
console.log(getFirstElementOfAnArray(arr, index));