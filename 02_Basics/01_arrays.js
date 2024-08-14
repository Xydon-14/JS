// const myArray = [0,1,2,3,4,5,true,"lokesh",null] //[elements,elements],we can store different types of datatypes
// console.log(myArray);

/* shallow copy - copy with same reference 
   deep copy - copy with different reference 
*/

const myArr2 = new Array(0,1,2,3,4,5)
// console.log(myArr2[3]);

//methods
// myArr2.push(7)//adds at last index
// myArr2.pop()//last value is removed
// myArr2.unshift(9); // adds value to zero index
// myArr2.shift(); // to remove zero index

// console.log(myArr2.includes(7)); //returns boolean
// console.log(myArr2.indexOf(4)); //if not exist -1
// console.log(myArr2);

let newArray = myArr2.join(); //converts array to string
console.log(newArray)

//slice,splice
console.log("A ",myArr2);
const myn1 = myArr2.slice(1,3) //last index is not included
console.log(myn1,"\n");

console.log("B ",myArr2);
const myn2 = myArr2.splice(1,3); // last index is included
console.log(myn2,"\n");

console.log("C ",myArr2); // after splicing // og array is changed // spliced elements are removed from the array