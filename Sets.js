// sets

const items = ['item1', 'item2']
const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
// numbers.add(['item1', 'item2']);
// numbers.add(['item1', 'item2']);
numbers.add(items);
numbers.add(items);
// if(numbers.has(1)){
//     console.log("1 is present");
// }else{
//     console.log("1 is not present");
// }
// console.log(numbers);
// for(let number of numbers){
//     console.log(number);
// }


const myArray = [1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);
// console.log(uniqueElements);
// console.log(myArray);


// find length in Sets
let length = 0;
for(let element of uniqueElements){
    length++;
}
console.log(length);