// Array Methods

// length

let names = ['alex','john','scott','harry','edward'];
console.log(names.length);

console.log(names[2]);

// finds from last index
console.log(names[names.length-1]);


names[2] = 'daniel';
console.log(names);

// another way to declare array but not recommended 

let name = new Array ('Name1', 'Name2');
console.log(name);

// push

let name1 = ['alex','john','scott','harry','edward'];
name1.push('alice');
console.log(name1);

// slice
// multiple values access from indexing 
// it takes two parameters first and end 
// the end value is omitted 

let cars = ['volvo','bmw','swift','alto'];
console.log(cars.slice(1,3));

// splice

// to insert multiple values from the indexing 

let fruit = ['apple','banana','orange','chicko'];
fruit.splice(2,0,'kiwi','grapes');
console.log(fruit);

// concatenation

let arr1 = [1,2,3,4,5,6];
let arr2 = [4,6,8,9,10,12];
let arr3 = [55,88,40,30,20];

console.log(arr1.concat(arr2));
console.log(arr1.concat(arr2,arr3));

// fill

let arr4 = [1,2,3,4,5,6,7,8,9];
arr4.fill('alex','joe',2,4);
console.log(arr4);

// includes

let num = [1,2,3,4,5,6,7];
console.log(num.includes(7,6));

// indexOf

let num1 = [4,2,3,4,5,6,7];
console.log(num1.indexOf(4));

// isArray
let num2 = [4,2,3,4,5,6,7];
console.log(Array.isArray(num2));

// join

let arr5 = [1,2,3,4,6,8];
console.log(arr5.join('and'));

// typeof

let var1 = arr5.join('1'); 
console.log(typeof var1);

// lastIndexOf

let num3 = [4,2,3,4,5,6,7];
console.log(num3.lastIndexOf(4));

// pop

let fruits = ['kiwi','grapes','banana'];
console.log(fruits.pop());

// reverse 

let fruit1 = ['kiwi','grapes','banana'];
console.log(fruit1.reverse());

// shift

let nums = [1,2,3,5,9];
console.log(nums.shift());


// sort

// ascending

let name3 = ['alex','john','scott','harry','edward'];
console.log(name3.sort());

// descending
 
console.log(name3.reverse());

// unshift

let num4 = [1,2,3,5,9];
num4.unshift('joe','venom');
console.log(num4);

// converting to array

let firstname = 'alex';
let arr6 = firstname.split('');
console.log(arr6);


