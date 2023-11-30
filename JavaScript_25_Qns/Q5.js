/* Make this work :->
                duplicate([1, 2, 3, 4, 5])      ans:->[1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
*/

function duplicate(nums, steps) {
    let i, data = [];
    for (i = 0; i < steps; i++) {
        for (let j = 0; j < nums.length; j++) {
            data.push(nums[j]);
        }
    }
    return data;
}
let nums = [1, 2, 3, 4, 5];
let steps = 10;
console.log(duplicate(nums, steps));

// Another process......
function newDuplicate(arr) {
    return arr.concat(arr);
}
console.log(newDuplicate([1, 2, 3, 4, 5]));