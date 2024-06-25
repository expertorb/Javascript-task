const nameId = 123342; //number type data
const accountName = "Raju Ahmed";
const bullian = true;
let addressName;

console.table([nameId, accountName, bullian, addressName,]);
console.log(typeof nameId);
console.log(typeof accountName);
console.log(typeof bullian);
console.log(typeof addressName);
console.log(typeof null); // is a object

// data type summery
const arryType = ["raju", "Ahmed", "JU"]; //arry

let dataObj = {
    accountName : "Raju",
    age : 23,

} // object data
console.log(dataObj);



const firstFun = function raju (){
}    
console.log(firstFun) //funtions

let oneNAme = "Md";
let twoName = oneNAme;
twoName = "Raju";

console.log(oneNAme);
console.log(twoName);

let neObject ={
    email: "info@gmail.com",
    phone: "0009090909",
}
let twObject = neObject;
twObject.email = "raju@gmail.com";
twObject.phone = "1212121"
console.log(neObject);
console.log(twObject);