function normalPrint() {
    console.log("R");
    console.log("A");
    console.log("J");
    console.log("U");
}
// normalPrint(normalPrint) //print

function oneFunction(numberOne, numberTwo) {
    // let result = numberOne + numberTwo
    return numberOne + numberTwo
}
const result = oneFunction(9, 4);
console.log("Output : ", result)

function twoFunction(username = "Md") {
    // if (username === undefined) {
    //     console.log("Please enter your username")
    //     return
    // }
    if (!username) {
        console.log("Please enter your username")
        return
    }
    return `${username} Please Log in to access`
}
// console.log(twoFunction("Raju"));
console.log(twoFunction("Raju"));

function serialNumber(...num1) {
    return num1
}
console.log(serialNumber(100, 200, 300, 400, 500));

function serialNumberTwo(val1, val2, ...num1) {
    return num1
}
console.log(serialNumberTwo(100, 200, 300, 400, 500))


const objectDataCall = {
    username: "Raju",
    age:30,
}
function objectData(callData) {
    console.log(`My name is ${callData.username} and I am ${callData.age} years`);
}
// objectData(objectDataCall);
objectData({
    username:"md",
    age:31
});

const newArray = [11, 22, 22, 33, 44, 55]
function arrayData(callData) {
    return callData[3]
}
console.log(arrayData(newArray));


inSertFunction(2)
function inSertFunction(num) {
    return num + 3
}
console.log(inSertFunction(2))


const newFrorm = function (num) {
    return num + 3
}
console.log(newFrorm(8));


function oNE() {
    const username = "raju";
    function tWo() {
        const aGe = 12;
        console.log(username, aGe)
    }
    tWo()
    // console.log(aGe)
}
oNE()

if (true) {
    const username = "Raju";
    if (username === "Raju") {
        const websote = "info.com";
        console.log(username, " " + " ", websote);
    }
    // console.log(websote);
}
// console.log(username);