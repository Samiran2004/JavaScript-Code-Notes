// Write a function to remove duplicate element from an array...

function removeDuplicateElement(arr) {
    const uniqueElements = []
    for(let i=0;i<arr.length;i++){
        
        /*if (uniqueElements.indexOf(arr[i]) === -1): This line checks whether the current element (arr[i]) is already present in the uniqueElements array. The indexOf method returns the index of the first occurrence of an element in the array, and if the element is not found, it returns -1. So, this condition checks if the current element is not already in the uniqueElements array.*/

        if (uniqueElements.indexOf(arr[i]) === -1) {
            uniqueElements.push(arr[i]);
        }
    }
    return uniqueElements;
}

const arr = [1, 2, 2, 3, 4, 5, 5, 6, 7, 7, 7, 8, 9];

console.log(removeDuplicateElement(arr));