for (let index = 0; index <= 10; index++) {
    const element = index;
    // console.log(element);
}

for (let i = 0; i <=10; i++) {
    const element = i;
    if (i === 5) {
        // console.log("5 is the best number")
    }
    // console.log(element)
}

for (let i = 1; i <=5; i++) {
    const element = i;
    // console.log(`Outer loop value: ${i}`);

    for (let j = 1; j <=5; j++) {
        const element = j;
    //    console.log(`Inner loop value ${j} aand Inner loop value ${i}`) 
    // console.log( i + '*' + j + '=' + i*j)
    }
}

const myArray = ["md", "Raju", "Ahmed"];
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

// for (let index = 1; index <=20; index++) {
//     if ( index === 5) {
//         console.log(`Please select the only 5`);
//         break
//     }
//     console.log(`Value is ${index}`);
// }
for (let index = 1; index <=20; index++) {
    if ( index === 5) {
        // console.log(`Please select the only 5`);
        continue
    }
    // console.log(`Value is ${index}`);
}

let wArray = ["batman", "supperman", "Hank"];
let arr = 0;
while (arr < wArray.length) {
    // console.log(`the value is ${wArray[arr]}`)
    arr = arr + 1
}

let neScore = 1;

do {
    console.log(`Please add the new do loop ${neScore}`)
    neScore++
} while (neScore <=10);