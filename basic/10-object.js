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

objectOne.greetingOne = function (){
    console.log("Hello Js User")
}
// console.log(objectOne.greetingOne());

objectOne.greetingTwo = function (){
    console.log(`Hello JS User ${this.name}`);
}
console.log(objectOne.greetingTwo());