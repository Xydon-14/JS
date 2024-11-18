getName3(); //CODE EXECUTED

console.log(getName); //whole function body

console.log(x); //UNDEFINED

var x = 7;

var getName = function(){
    console.log("Namaste JS");  //treated as variable 
}

var getName1 = () => {
    console.log("Namaste Lokesh");//treated as variable  
}

function getName3(){
    console.log("Namaste");    
}

// console.log(x); //this will give the value of x

// getName(); //CODE EXECUTED

// console.log(getName); //whole function body