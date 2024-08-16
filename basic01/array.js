const names = ["hp", "dell", "lenvo"];
console.log(names[1]);

const marks = [10, 19, 21];
console.log(marks);

const stName = [];
stName[0] = "What";
stName[1] = "can";
stName[2] = "I";
stName[3] = "Do";
console.log(stName);

const stNamePop = new Array("One Pop", "Two", "three");
stNamePop.pop();
stNamePop.pop();
console.log(stNamePop); //Delete Last Number

const stNameSplice = new Array("One Splice", "Two Splice", "Three Splice");
stNameSplice.splice(0,1);
console.log(stNameSplice);

const stNameReverse = new Array("One Reverse", "Two Reverse", "Three Reverse");
stNameReverse.reverse();
console.log(stNameReverse);

const stNameSort = new Array("One Sort", "Two Sort", "Three Sort");
stNameSort.sort();
console.log(stNameSort);

const stString = ["String Name", "Raju", "Ahmed"];
const stNumber = [0, 120, 11, 12, 19, 20];
const stArray = new Array(7, 8, 9);
console.log(stString, stNumber, stArray);

//Add any elements
stString.push("From JU");
stNumber.push(24);
stArray.push(1);
console.log(stString, stNumber, stArray);

// Delete 0 Auto
stNumber.shift();
//first add Number
stNumber.unshift(158);
console.log(stNumber);

//show Boolean value
console.log(stNumber.includes(9));
console.log(stNumber.indexOf(2));

//make them  All String
const stTypeof = stNumber.join();
console.log(typeof stTypeof);


const oneArray = [1,2,3, [4,5, [6,7,8]]];
const twoArray = one


