// map method

// const users = [
//     {firstName: "alex", age: 20},
//     {firstName: "john", age: 21},
//     {firstName: "harry", age: 22},
//     {firstName: "alice", age: 23},
// ]

// const userNames = users.map((user)=>{
//     return user.firstName;
// });

// console.log(userNames);


const users = [
    {firstName: "alex", age: 20},
    {firstName: "john", age: 22},
    {firstName: "joe", age: 24},
    {firstName: "harry", age: 25},

]

const userNames = users.map((user)=>{
    return user.firstName;
});

console.log(userNames);