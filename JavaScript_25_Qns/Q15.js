/* Write a JavaScript function which accepts an argument and return the type
    Note: There are six possible values that typeof returns: Object, boolean, function, number, string, undefine.*/

function typeFinder(arg) {
    return typeof (arg);
}
let value = 123;
console.log(typeFinder(value));