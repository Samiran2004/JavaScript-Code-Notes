// // Copy all element of an array.........

function copyArray(arr){
    let newArr = [];
    arr.forEach(element => {
        newArr.push(element);
    });
    return newArr;
}
let arr = [1,2,3,4,5,6,7,8,9];
console.log(copyArray(arr));