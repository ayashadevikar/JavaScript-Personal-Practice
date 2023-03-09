// hof

//forEach

let arr = ['hi', 'hello', 'hola', 'namstae'];

arr.forEach((val) => {
    console.log(val);
})

arr.forEach(myfunc);
function myfunc(val) {
    console.log(val);
}


// SETTIMEOUT

// setTimeout(() => {
//     console.log('hello fsjs 2');
// }, 3000);

// setInterval

// setInterval(() => {
//       console.log("hi");
// }, 1000);

// map
// filter
// reduce
// find
// every
// some
// sort

// map

const numbers = [1, 2, 3, 4, 5, 6];
numbers.map((num) => {
      num * num;
})

const squ = numbers.map((num) => num * num);
console.log(squ);

// filter

const count = ['India', 'Palistan', 'Canada', 'Ireland', 'Japan', 'Kenya', 'Finland', 'Germany', 'Srilanka'];

const store = count.filter((val) => val.includes('land'));
console.log(store);

// reduce

const num = [1,2,3,4,5,6,7];
const sum = num.reduce((acc, curr) => acc + curr, 1);
console.log(sum);

// destructuring and spread and rest 

const sci = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, grav, bodytemp, boiltemp] = sci;

console.log(e, pi, grav, bodytemp, boiltemp);

const arr1 = [1, 2, 3];
let [var1, , var2] = arr1;
console.log(var1, var2);

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
let [num1, num2, ...rest] = arr2;
console.log(num1, num2);
console.log(rest);