const tinderUser = {};
tinderUser.name = "Samiran";
tinderUser.age = 19;
tinderUser.isLoggedIn = true;
tinderUser.email = "samiranABC@gmail.com";
tinderUser.phNumber = 12334567;

// console.log(tinderUser);

const regularUser = {
    email: "ksf@gmail.com",
    name: {
        userFullName: {
            firstName: "Samiran",
            lastName: "Samanta",
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.name.userFullName.firstName);

// // Marge two Objects..................

let Obj1 = {
    1: "a",
    2: "b",
    3: "c"
}
let Obj2 = {
    4: "d",
    5: "e",
    6: "f"
}

// const Obj3 = { Obj1, Obj2 };
// const Obj3 = Object.assign(Obj1, Obj2);
const Obj3 = {...Obj1, ...Obj2}
// console.log(Obj3);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));