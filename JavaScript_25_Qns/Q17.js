// // Write a JavaScript function to get the last element of an Array. Passing a parameter 'n' will return the last 'n' elements of the array.....

function getTheLastElement(arr, index = 0) {
    if (arr.length < index) {
        let msg = "INVALID Index.";
        return msg;
    } else {
        if (index == 0) {
            return arr[arr.length - 1];
        } else {
            let newArr = [];
            for (let i = arr.length - 1; i >= 0; i--) {
                newArr.push(arr[i]);
            }
            return newArr;
        }
    }
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(getTheLastElement(arr));