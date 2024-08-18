const map = new Map()

map.set("lokesh","jaiswar")
map.set("pooja","jaiswar")
map.set("jayesh","jaiswar")

console.log(map);

for(const [i,j] of map){
console.log(`Value of i is ${i} and value of j is ${j}`);  
}

