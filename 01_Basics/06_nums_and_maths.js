const score = 400;
const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //decimal ke baad kinta no chahiye

const otherNumber = 231.8966
// console.log(otherNumber.toPrecision(3));
//kitne value ka precision chahiye

const hundreds = 1000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString("en-IN"));
//understand string and number methods

// *****************Maths**************************
// console.log(Math.abs(-4)); //remove - and give + no
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));
// console.log(Math.max(4.2,45,6,7));
// console.log(Math.min(4.2,45,6,7));

// console.log(Math.random());//by default 0 se 1 ke bich mai
// console.log((Math.random()*10)+1); //(0.0)multiplying 10 to shift the vale to left side and adding one to get the minimum value 1
// console.log(Math.round((Math.random()*10)+1)); 

const max = 30;
const min = 20;

console.log(Math.round(Math.random()*(max-min+1)+min)) //sir's method 
console.log(Math.round((Math.random()*10)+min))        // mine