// // Loop an array of object and remove all objects which don't have gender's value male..........

function removerObject(arr) {
    let newArr = arr.filter((elm)=>{
        return elm.gender == "Male";
    });
    return newArr;
}
let arr = [
    { name: "Samiran", gender: "Male" }, { name: "Kiddo", gender: "Male" }, { name: "Ritam", gender: "Male" }, { name: "Manisha", gender: "Female" }, { name: "Janvi", gender: "Male" }
]
console.log(removerObject(arr));