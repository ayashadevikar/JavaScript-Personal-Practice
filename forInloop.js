// for in loo in array

const fruits = ["apple","mango","grapes","banana"];
const fruits2 = [];

for(let index in fruits){
    // console.log(fruits[index]);
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);