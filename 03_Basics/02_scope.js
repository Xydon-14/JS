//browser mai console mai run karte hai aur code environment mai node mai jo run karte hai dono ka global scope alag hai 

// var c = 300
// let a = 100
// //global scope
// if(true){
//     let a = 10
//     // console.log("INNER : ",a);
//     //block scope
//     const b =20;
//     var c = 30;//c=30
     //it can be accessed throughout the code
// }

// console.log(a);
// // console.log(b);
// console.log(c);

// function one(){
//     const username = "hitesh"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);

//      two()

// }

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// // ++++++++++++++++++ interesting ++++++++++++++++++

//two ways of declaring a function

// console.log(addone(5)) // this will run
// function addone(num){
//     return num + 1
// }
      
//we call this way expression also
// const addTwo = function(num){
//     return num + 2
// }
        
// addTwo(5) // this will not run concept of hoisting