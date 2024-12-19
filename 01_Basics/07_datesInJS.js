// let myDate = new Date() //object
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

//to declare a date 
let myCreatedDate = new Date(2025,0o2,14,5,0,3);//jo month uska ek kam likhne ka (because array starts with 0)
// let myCreatedDate = new Date("2025-03-14");yyyy-mm-dd//string mai exact likhne ka
// let myCreatedDate = new Date("03-14-2005");//mm-dd-yy//string mai exact likhne ka
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp); //value in millisecondds from 1-1-1970
// console.log(myCreatedDate.getTime());//to get any date in miliseconds

// console.log(Date.now());//value is in milisecond
// console.log(Math.round(Date.now()/1000))// to convert in seconds and math.round to avoid decimal values

let newDate = new Date()
//current day data is returned
// console.log(newDate.getMonth()+1);//because index is returned
// console.log(newDate.getDate());

// // string interpolation = `${}`

// newDate.toLocaleString("default",{
//     weekday:"long"
// })