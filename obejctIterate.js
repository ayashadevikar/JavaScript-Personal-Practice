// how to iterate objects

const person = {
    name: "alice",
    age: 22,
    "person hobbies": ["guitar","sleeping","listening music"]
}

// for in loop
// object.keys

// for(let key in person){
//     // console.log(key);
//     //console.log(person.key); // undefined
//     // console.log(person[key]);
//     // key value pair
//     // console.log(`${key} : ${person[key]}`);
//     console.log(key, " : " ,person[key]);
//     // console.log(person[key]);
// }

// console.log(Object.keys(person));
// const val = Array.isArray((Object.keys(person)));
// console.log(val);


for(let key of Object.keys(person)){
    console.log(person[key]);
}