// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }

// console.log(sayMyName) //reference
// sayMyName() //execution

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

const result1 = addTwoNumbers(3,4);
// console.log(result1); //it will not reutrn anything because nothing is returned from the function

function addTwoNumbers(number1, number2){ //parameters

    // let result = number1 + number2
    // return result //using return we can store a value in a vairable
    return number1 + number2 
    // console.log("after returning nothing wii be printed");
    
}

const result = addTwoNumbers(3, 5) //arguments

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username || username===undefined){ //dono ka same matlab hai
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage()) if no value is passed inside the funtion undefined will come
// console.log(loginUserMessage("hitesh"))

function calculateCartPrice(val1, val2, ...num1){ //...num1=rest operator(to take many values and store in array)
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user) //if there would be no attribute like username and price in the object then it will show undefined
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));