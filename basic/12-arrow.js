const userOne = {
    username:"Raju",
    Price: 199,
    welcomeMassage: function () {
        console.log(`${this.username}, Welcome to our website`);
        // console.log(this);
    }
}
userOne.welcomeMassage();
userOne.username="sam";
userOne.welcomeMassage();
// console.log(this);


function one(){
    let name = "raju"
    // console.log(this.name); undefined
    // console.log(this); Global Object
}
one();

// const two = function () {
//     console.log(this)
// }
// two()

const three =  () =>{
   let username= "MD Ahmed"
   console.log(username);
   console.log(this)

}
three()

// const four = (num1, num2) =>{
//     return num1 + num2
// }
// console.log(four(4, 9))

const four = (num1, num2) => num1 + num2
console.log(four(4, 9));



