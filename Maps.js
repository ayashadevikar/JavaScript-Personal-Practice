// maps

// object literal
// key -> string
// key -> symbol
// const person = {
//     firstName: "alex",
//     age: 7
// }
// console.log(person.firstName);
// console.log(person["firstName"]);
// console.log(person[1]);
// for(let key in person){
//     console.log(typeof key);
// }

// key value pair
const person = new Map();
person.set('firstName', 'alex');
person.set('age', 7);
person.set(1,'one');
// console.log(person);
// console.log(person['firstName']);
// console.log(person.get(1));
// for(let key of person.keys()){
//     console.log(key, typeof key);
// }
// for(let [key, value] of person){
//     console.log(Array.isArray(key));
//     console.log(key, value)
// }

const person1= {
    id: 1,
    firstName: "alex"

}
const userInfo = new Map();
userInfo.set(person1, {age: 8, gender: "male"});
console.log(userInfo);
console.log(person1.id);
console.log(userInfo.get(person1).gender);
