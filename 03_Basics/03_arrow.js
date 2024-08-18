const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        // this refers to the current context
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// console.log(this); this will return {} because it is written in node environment
//In browser we will get windows

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //functions ke andar context nhi
//     // console.log(this); //this will return many values
// }

// chai() //function ke andar this use nhi kar sakte //undefined aayega

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// } //function ke andar this use nhi kar sakte //undefined aayega

//arrow function () => {}
// const chai =  () => {
//     let username = "hitesh"
//     console.log(this); //this will return empty {}
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 //explicit return
// }

//implicit return = mai maan leta hu aapko return karna hai , likhne likh ki jarurat nhi
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

//{} use hua toh return likhna padega
//() use hua toh nhi likhna padega

const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

//function bydefault undefined return karta hai