
//for Of loop
let arr = [1, 2, 3, 4, 5];

for (const number of arr) {
    // console.log(`Show the all number ${number}`)
}

const greet = "Hello World"
for (const gre of greet) {
    // console.log(`show the each charector is ${gre}`);
}

// Map

const map = new Map();
map.set('Dhaka', "Bangladesh")
map.set('In', "India");
// console.log(map);

for (const [key, value] of map) {
    // console.log(key, '--' , value);
}

const progLan = {
    js: 'javaScript',
    py: 'python',
    cpp: 'C++'
}

for (const key in progLan) {
//    console.log(`${key} the full value of ${progLan[key]}`);
}

const proArray = ["java", "paython", "C++"]

for (const key in proArray) {
    // console.log(proArray[key])
}

const froE = ["C++", "Python", "PHP", "javascript"]
froE.forEach( function (item) {
    // console.log(item);
});

froE.forEach( (item)=> {
    // console.log(item)
});

function printMe(item){
    // console.log(item);
}
froE.forEach(printMe);

froE.forEach((item, index)=>{
    // console.log(item, index);
});

const liquidObj = [
    {
        firstName: "Md",
        lastName: "Raju"
    },
    {
        firstName: "Md",
        lastName: "Shakil"
    },
    {
        firstName: "Md",
        lastName: "Jony"
    }
]
liquidObj.forEach( (item)=> {
    console.log(item.lastName);
})