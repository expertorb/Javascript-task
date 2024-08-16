const codding = [1,2,3,4,5,6,7,8,9,10]

const newNum = codding.filter( (num) => {
    return num > 5
} )
// console.log(newNum);


const mynum = [];
codding.forEach( (num) => {
    if (num > 5) {
        mynum.push(num)
    }
})
// console.log(mynum);

const theNum = codding.map( (num) => {
    return num + 10
})
// console.log(theNum)


const lastn = [1, 2, 3]
const totallN = lastn.reduce((acc, curr) =>{
    // console.log(`acc: ${acc} and curr: ${curr}`)
    return acc + curr
}, 0);

// console.log(totallN);

const shoppingCart = [
    {
        item:"book1",
        price: 100
    },
    {
        item:"book2",
        price: 14
    },
    {
        item:"book3",
        price: 20
    },
    {
        item:"book4",
        price: 10
    }
]
const totalPrice = shoppingCart.reduce( (acc, value) => {
 return acc + value.price
}, 0);
console.log(totalPrice)