// Immediately Invoked Function Expressions (IIFE)
//reasons
//to immediately execute
//global scope se pollution avoid karne ke liye

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); //ending is necessary 

// ()first block mai function ka definition()second to exectue immediately

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )("lokesh")

//jo function immediately execute ho jaye
//global scope ke pollution se problem hoti hai kahi baar toh us global scope ke variables ke pollution ko hatane ke liye  

//practice code
const printName = (name) => {
    console.log(`Name is ${name}`);   
}

printName("lokesh");
