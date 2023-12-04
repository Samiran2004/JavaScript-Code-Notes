// // Write a JavaScript function to compute the union of two array........

function unionTwoArray(arr1,arr2){
    return [...new Set(arr1.concat(arr2))]
}
let arr1 = [1, 2, 3];
let arr2 = [100, 2, 1, 10];
console.log(unionTwoArray(arr1,arr2));