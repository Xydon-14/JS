// let name = "Lokesh"
// let repoCount = 50
// //console.log(name + repoCount + " value"); old way

// //modern way (String Interpolation)
// console.log(`My name is ${name} and My repository count is ${repoCount}.`)

// //second way to declare a string 
const gameName = new String("LokeshJ-hs-com")
// console.log(gameName[5]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('o'));

const newString = gameName.substring(0,6)
console.log(newString);

const anotherString = gameName.slice(-9,9)//can pass negative value
console.log(anotherString);

const string1 = "            lokesh      "
console.log(string1.trim())

const url = "https://lokesh.com/lokesh$20$jaiswar"
// console.log(url.replace("$20$","-"))
// console.log(url.includes("lokesh"));
// console.log(gameName.split("-")); // returns array