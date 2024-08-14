const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
//marvel_heros.push(dc_heros) // it would be added as a single element
// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);//if you want to remove flash

// const allHeros = marvel_heros.concat(dc_heros) //adds as different element
// console.log(allHeros);

// spread(...arr_name) = kach ka glass drop karne pe sb pieces spread ho jati hain
const all_new_heroes = [...marvel_heros,...dc_heros]
// console.log(all_new_heroes);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_array = another_array.flat(Infinity)//flat method sab sub arrays ko individually store karega , usme depth bhi de sakte hai
// console.log(real_another_array); 
// console.log(another_array); 

console.log(Array.isArray("Lokesh"));// returns boolean 
console.log(Array.from("Lokesh")); //converts into array
console.log(Array.from({name:"Lokesh"})) //interesting //returns empty array // we should specify which array we want key or value

let names = {1:"Lokesh",2:"nandani",3:"jayesh",4:"pooja"}
//console.log(names.values);
console.log(Object.entries(names));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));