const objectOne = {
    name: "Raju Ahmed",
    email: "info@gmail.com",
    Address: "Dhaka",
    Phone: "0101010101",
    age: 19,
    lastDay:["sun", "mon"]
}
// console.log(objectOne.name);
// console.log(objectOne["email"])
// Object.freeze(objectOne);
// objectOne.email = "raju@gmail.com";
// console.log(objectOne.email)

// objectOne.greetingOne = function (){
//     console.log("Hello Js User")
// }
// // console.log(objectOne.greetingOne());

// objectOne.greetingTwo = function (){
//     console.log(`Hello JS User ${this.name}`);
// }
// console.log(objectOne.greetingTwo());


//  const tinderUser = new Object();
// console.log(typeof tinderUser);

const tinderUserOne = {}
tinderUserOne.id = "abc123";
tinderUserOne.name = "Raju";
tinderUserOne.login = false;

console.log(tinderUserOne);

const tinderUserTwo = {
    email1:"qwqw@gmail.com",
    fullName:{
        firstName:{
            name:"raju",
            address:"ju",
        }
    }
}
// console.log(tinderUserTwo.fullName.firstName.name);

const obj1 = {"a":1, "b":2};
const obj2 = {"c":3, "d":4};
const obj3 = {"e":1, "f":6};

// const obj4 = { obj1, obj2, obj3};
// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4)
console.log(Object.keys(objectOne));
console.log(Object.values(objectOne));
console.log(Object.entries(objectOne));
console.log(objectOne.hasOwnProperty('age'));