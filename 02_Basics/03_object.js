// singleton - when made using constructor
// Object.create 

//object literals
const mySym = Symbol("key1")
const JsUser = {
    name:"lokesh",//by default it will store "name"
    "full name":"lokesh jaiswar",// this value can not be accessed through dot
    [mySym]: "mykey1",//to use symbol keep the key in brackets
    age : 19,
    location : "Mumbai",
    email: "lokesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(mySym);

JsUser.email = "lokesh@chatgpt.com" //previous will be over rided
// Object.freeze(JsUser);//now no changes can be done
JsUser.email = "lokesh@microsoft.com" //since it has freeze nothing will happen
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
} 

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
