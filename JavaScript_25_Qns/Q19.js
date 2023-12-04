// // Write a JavaScript function to shuffle an Array...............

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let randomNumber = Math.floor(Math.random() * i);
        let temp = arr[i];
        arr[i] = arr[randomNumber];
        arr[randomNumber] = temp;
    }
    return arr;
}
let arr = [7, 5, 5, 1, 0, 4, 1, 8, 5, 3];
console.log(shuffleArray(arr));