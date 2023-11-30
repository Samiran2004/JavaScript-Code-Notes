// // How to check if an Object is an Array or not............
function checkArray(elm) {
    if (Array.isArray(elm)) {
        console.log("This is an array");
    } else {
        console.log("This is an Object");
    }
}
const obj = {
    Name: "Samiran",
    Age: 19,
    Pin: 721154,
    isLoggedIn: true,
    Department: "Computer Scirnce and Engineering"
}
const arr = [1, 2, 3, "Hello", true];
checkArray(obj);
checkArray(arr);