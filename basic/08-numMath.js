const score = 100;
const newScore = new Number(109.8923);

console.log(score);
console.log(newScore);

console.log(newScore.toFixed(2));
console.log(newScore.toPrecision(6));
console.log(newScore.toString());
console.log(newScore)

console.log(Math.abs(-4));
console.log(Math.round(4.656));
console.log(Math.floor(4.99));
console.log(Math.ceil(5.9));
console.log(Math.min(2, 4, 8, 9, 12));
console.log(Math.max(2, 4, 8, 9, 12));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1) + min))