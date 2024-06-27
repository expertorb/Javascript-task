const arryOne = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const arryTwo = ["Md", "Raju", "Ahmed"];
const arryThree = new Array(7, 8, 9);


console.log(arryTwo);
console.log(arryThree);


// arryOne.push(9); //add one number
// arryOne.pop(); //delet last number

// arryOne.shift() //delet 0 auto
// arryOne.unshift(3); // fisrt add
//console.log(arryOne.includes(8)); //boolean value
// console.log(arryOne.indexOf(8))

const arryFoor = arryOne.join(); // string
console.log(typeof arryFoor);

const arryFive = arryOne.splice(0, 5);
console.log("splice", arryFive);

const arrySix = arryOne.slice(0, 5);
console.log("slice", arrySix);