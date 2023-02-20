// difference between dot and bracket notation

const key = "email";
const person = {
    name: "alice",
    age: 22,
    "person hobbies": ["guitar","sleeping","listening music"]
}

// console.log(person["person hobbies"]);

person[key] = "alex@gmail.com";
console.log(person);