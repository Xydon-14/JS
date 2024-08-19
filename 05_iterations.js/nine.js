//bills banane ke liye reduce use karte hai jaise bills mai start ka value zero hota hai phir badte rahta hai 
//acc - accumulator (pehla value initializer hota hai) pehle iteration ke baad jo value aata hai wo acc mai jata hai
//currval - array ka pehla element 

const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval //ohir ye value acc mai jaayega
}, 0) //0 initializer hai

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

// console.log(priceToPay);