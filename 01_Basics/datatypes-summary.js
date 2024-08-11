// In js datatypes is differentiated on the basis of how data is stored in the memory and how data is called from the memory

//Primitive (call by value : value ka copy milta hai)
// 7 types : String,Number,Boolean,null(empty),undefined(variable declared par kya value dalna hai vo decide nhi hua hai),Symbol(unique banane ke liye),BigInt(bade values ke liye)

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // iska value define nhi kiya hai toh usme undefined hoga

const id = Symbol('123')
const anotherId = Symbol('123')
//ye dono ka value dala toh same hai par Symbol ka kaam hai unique id dena toh ye same nhi hoga
//console.log(id === anotherId);

const bigNumber = 235555555555555545674546n


//Non Primitive (reference) all non primitive data types returns obejct on typeof
//Array,Objects,Functions

const heroes = ["shaktiman","naagraj","doga"] //array
let myObj = {name:"lokesh",age:"19"} //curly braces ke andar jo bhi hota hai usko object bolte hai

//function returns function on typeof but has object funtion 
const myFunction = function(){ 
    console.log("Hello World");    
}
//console.log(typeof myObj);

//Dynamically or Staticcally Typed
//agarr variable assign karte hume batana pad rha hai ki value konse type ka hai toh use statically typed bolte hai eg : c++,java
//dynamically typed : python,js


//***************************Memory*****************************************

//Stack (Primitive),Heap (Non-Primitive)
//stored in stack (copy provided)
let myYoutubeName = "LokeshJaiswar"
let anotherName = myYoutubeName
anotherName = "Jayesh"

console.log(anotherName)

//directly stored in heap (reference provided)
let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email = "lokeshjaiswar@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


