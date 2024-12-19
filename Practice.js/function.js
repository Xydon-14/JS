// var x = 1;
// a();
// b();
// console.log(x);

// function a(){
//     var x = 10;
//     console.log(x);   
// }

// function b(){
//     var x = 100;
//     console.log(x);   
// }

// console.log(x);
// console.log(window.x);
// console.log(this.x);

// //
// var d = 14  //during initialization literal was of number type
// d = "lokesh"; //after wards change to string

//SCOPE CHAIN
// function a(){
//     var b = 10;
//     c();
//     function c(){
//         console.log(b);    
//     }
// }

// a();

//LET AND CONST DECLARATIONS ARE HOISTED.
// console.log(a);

// //THIS PERIOD IS CALLED TEMPORAL DEAD ZONE

// let a = 10; //give initialization error if accessed before initialization

// var b = 100; //undefined

//TYPES OF ERROR
// console.log(x);// not defined
// console.log(a);//first initialize it
// let a = 10; 
// let a = 100; //cannot be again declared
// var a = 1000;

// let a = 20
// a = 20; //it can be done
// console.log(a);

// const v;

// const a = 30;
// a = 40;
// console.log(a);

// function aa(){
//     var a = 30;
// }
// console.log(a);

// let b = 200;
// function a(){
//     var b = 10;
//     console.log(b);
    
// }
// console.log(b); //200
// a();

// const a = 20
// {
//     const a = 40
//     {
//         const a = 60
//         console.log(a);  
//     }
// }

// function a(){
//     var a = 7;
//     return function y(){
//         console.log(a);       
//     }
//     // return y; //this will return the entire ()
//     //THE FUNCTION ALONG WITH ITS LEXICAL SCOPE WAS RETURNED I.E CLOSURE
// }
// var x = a();    //the exexution context of a() is deleted then also it will maintain the lexical scope.
// console.log(x); //it will return 7 

// function z(){
//     var b = 900;
//     function x(){
//         var a = 7;
//         function y(){
//             console.log(a , b);
//         }
//         y();
//     }
//     x();
// }
// z();

// function x(){
//     for(let i = 1; i <= 5 ; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i*1000);
//     }
//     console.log("Namaste JavaScript");
// }
// x();

// function outest(){
//     var c = 60
//     function outer(b){ //it is also part of b so it works the same as a
//         var a = 10;
//         // let a = 20; will work the same way
//         function inner(){
//             console.log(a , b , c);
//         }
//         return inner;
//     }
//     return outer;
// }

// let a = 100; this variable is completely new it doesnt have any conflict with variable inside the function but if inside variable was not present then it would have been printed

// outer()();
// var close = outer(); //same thing 
// close();

// var close = outest()("hello");
// close();

// function counter(){
//     var count = 0; // since now it is in aa function the outside scope can not access this variable
//     return function incrementCounter(){
//         count++;
//         console.log(count);       
//     }
// }

// var counter1 = counter();
// counter1(); 1
// counter1(); 2

// var counter2 = counter();
// counter2(); //1 it is a new function therefore the counter will start again from 0

// function Counter(){
//     var count = 0;
//     this.incrementCounter = function(){
//         count++;
//         console.log(count);       
//     }
//     this.decrementCounter = function(){
//         count--;
//         console.log(count);       
//     }
// }

// var counter1 = new Counter(); //since it is a constructor function we have to use new

// counter1.incrementCounter();1
// counter1.incrementCounter();2
// counter1.decrementCounter();1

// function a(){
//     var x = 0; //after the execution of a() this variable should have freezed up by the garbage collector but it cant do this because it form a closure with the function b().  
//     return function b(){
//         console.log(x);       
//     }
// }

// var y = a();
// //LATER ON IT CAN BE USED THEREFORE THE CLOSURE CANNOT BE FREEZED.
// y();

// function a(){
//     var x = 0, z = 10; //here z would be garbage collected though it comes in the closure but it has no use in the program therefore it would be freezed. 
//     return function b(){
//         console.log(x);       
//     }
// }

// var y = a();
// y();

// FUNCTION STATEMENT OR FUNCTION DECLARATION:
// a();
// function a(){
//     console.log("a called");    
// }

// FUNCTION EXPRESSION:
// b(); //Uncaught TypeError: b is not a function
// var b = function (){
//     console.log("b called");  
// }

//DIFF BETWEEN STATEMENT AND EXPRESSION
//HOISTING

// ANONYMOUS FUNCTION:
// function (){
//     // this will throw: Uncaught SyntaxError: Function statements require a function name

//     //this are used in place where functions are as as values.
// }

//NAMED FUNCTIONS:
// it is same as function expression but we use statement function in place of anonymous function
// var b = function xyz(){
//     console.log("b called");  
// }
// b();
// xyz();Uncaught ReferenceError: xyz is not defined //xyz is not present in the outer scope therefore it cannot be accessed in the outer scope

//PARAMETERS AND ARGUMENTS
// function a(para){ //parameters
//     console.log(para);   
// }
// a("Lokesh"); //arguments

// // FIRST CLASS FUNCTION OR FIRST CLASS CITIIZENS:
// // functions can be passed to another function as an argument
// function x(para){
//     console.log(para);
// }
// x(function (){ //1 way
//     console.log("Lokesh");
// })

// function xyz(){

// }
// x(xyz); // 2 way

// var d = function(){

// }
// x(d); //3 WAY

// //we can return a function too from a function
// function y(para){
//     return function ln(){

//     }
// }
// var v = y(function(){

// })
// console.log(v);

//bcoz of all the ability of function they are called first class functions

//settimeout takes the call back function to a different space and holds it there till the expiry of the timer
// setTimeout(function (){
//     console.log("timer");   
// },5000)

// function x(y){
//     console.log("x");
//     y();
// }
// x(function y(){
//     console.log("y");
// })

// o/p : x y timer

// document.getElementById("clickMe").addEventListener("click",function xyz(){
//     //if this event happens this call back function will come directly in the call stack and would be executed
//     console.log("Button Clicked");    
// })

// console.log("start");

// setTimeout(function cb(){
//     console.log("callback");
// },0)

// console.log("end");

// let startDate = new Date().getTime();
// let endDate = startDate;

// while(endDate < startDate + 10000){
//     endDate = new Date().getTime();
// }

// console.log("while expires");

// const radius = [3,1,2,4]

// const calculateArea = function (radius){
//     const output = []
//     for (let i = 0; i < radius.length; i++) {
//         output.push(Math.PI*radius[i]*radius[i]);      
//     }
//     return output;
// }
// console.log(calculateArea(radius));

// const calculateCircumference = function (radius){
//     const output = []
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2*Math.PI*radius[i]);      
//     }
//     return output;
// }
// console.log(calculateCircumference(radius));

// const calculateDiameter = function (radius){
//     const output = []
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2*radius[i]);      
//     }
//     return output;
// }
// console.log(calculateDiameter(radius));


// const circumference = function(radius){
//     return Math.PI*radius*2;
// }

// const diameter = function(radius){
//     return 2*radius;
// }

// const radius = [3,1,2,4]

// const area = function(radius){
//     return Math.PI*radius*radius;
// }

// Array.prototype.calculate = function (logic){
//     const output = []
//     for (let i = 0; i < this.length; i++) {
//         output.push(logic(this[i]));
//         //THIS POINTS TOWRDS THE RADIUS      
//     }
//     return output;
// }

// console.log(radius.map(area));
// console.log(calculate(radius,area)); 
//to make the function exactly like map we have used array.prototype
// console.log(radius.calculate(area));


// console.log(calculate(radius,circumference));
// console.log(calculate(radius,diameter));

// let arr = ["Lokesh","Nandani"]
// let object = {
//     name : "Lokesh",
//     city : "Mumbai",
//     getIntro : function(){
//         console.log(this.name + " from "+this.city);
//     }
// }

// let object2 = {
//     name : "Jayesh"
// }

// //NEVER DO THIS IN YOUR CODE
// object2.__proto__ = object;

// Function.prototype.myBind = function(){
//     console.log("Hi lokesh hereeeeeee");  
// }

// function fun(){

// }


// const ans = arr.reduce(function(acc,curr){
    //     acc = acc + curr;
    //     return acc;
    // },0);
    
    // console.log(ans);
    
// const arr = [5,6,7,3];

// // function max(arr){
// //     let ans = 0;
// //     for(let i = 0 ; i < arr.length ; i++){
// //         if (arr[i] > ans){
// //             ans = arr[i];
// //         }
// //     }
// //     return ans;
// // }

// // const msxi = max(arr);
// // console.log(msxi);


// const max = arr.reduce(function(ans,curr){
//     if(curr > ans){
//         ans = curr;
//     }
//     return ans;
// },0)

// console.log(max);

// const cart = ["shoes","pants","kurta"]

// //with callbacks
// createOrder(cart , function(){
//     proceedToPayment(orderId);
// })

// //with promise
// const promise = createOrder(cart);

// promise.then(function(orderId){
//     proceedToPayment(orderId);
// });

// const rest_api = "https://api.restful-api.dev/objects";

// const user = fetch(rest_api);

// console.log(user);

//PROMISES HAVE TWO PART CONSUMING AND CREATING 
//CONSUMING
const cart = ["shoes","pants","kurta"]

const promise = createOrder(cart);

promise
.then(function(orderId){
    console.log(orderId); 
    return orderId;   
})
.then(function(orderId){
   return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);    
})
.catch(function(err){
    console.log(err.message);   
})
.then(function(paymentInfo){
    console.log("This function would be executed");    
})

//CREATING
function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        // Task it have to do
        //validateOrder
        //createOrder
        //orderId

        if(!validateOrder(cart)){
            const err = new Error("Cart is not vlaid");
            reject(err);
        }
        //logic for createOrder()
        const orderId = "123345";
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            },5000)
        }
    })
    return pr;
}

function validateOrder(cart){
    return true;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("Payment is Successful");
    })
}

