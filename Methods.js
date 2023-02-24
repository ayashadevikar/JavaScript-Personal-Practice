// methods

// const person = {
//     firstName : "john",
//     age: 8,
//     about: function(){
//         console.log(this);
        // console.log("person name is alex and person age is 8");
        // console.log(`person name is ${this.firstName} and person age is ${this.age} `);
         
//     }
// }
// person.about();
// console.log(person.about);

function personInfo(){
    console.log(`person name is ${this.firstName} and person age is ${this.age} `);
}

const person1 = {
    firstName : "john",
    age: 8,
    about: personInfo
}

const person2 = {
    firstName : "alex",
    age: 18,
    about: personInfo
}
const person3 = {
    firstName : "max",
    age: 10,
    about: personInfo
}

person1.about();
person2.about();
person3.about();
