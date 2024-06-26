let myDate = new Date();

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


// let myNewDate = new Date(24, 0 , 14);
// let myNewDate = new Date(2024, 0 , 14, 5, 3);
 let myNewDate = new Date("01-02-2024");

// console.log(myNewDate.toLocaleString());

// let myTimestamp = Date.now();
console.log(myTimestamp);
console.log(myNewDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();


console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(`${newDate} this new time`);

newDate.toLocaleString('default', {
    weekday: "narrow"
})
console.log(newDate);