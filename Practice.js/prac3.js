const string = ["lokesh","jaiswar","pooja"]

// for (const str in string){
//     console.log(string[str]);   
// }

// const value = string.forEach( function(str){
//     console.log(str);
//     return str;
// })

// console.log(value);

// const numbers = [1,2,3,4,5,6,7,8,9,10]

// const nums = numbers.filter( function(num) {
//     if(num>5){
        
//     }    
// })

// console.log(nums);

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

const total = shoppingCart.reduce( (acc,curval)=>( acc+curval.price),0)
console.log(total);
