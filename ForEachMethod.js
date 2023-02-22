// for each

// const numbers = [4,2,5,8];

// numbers.forEach(function(number, index){
//     console.log(number*3, index);
// })

const users = [
    {firstName: "alex", age: 23},
    {firstName: "john", age: 22},
    {firstName: "alice", age: 24},
    {firstName: "harry", age: 25},
]

users.forEach(function(user){
    console.log(user.firstName);
})

// arrow function
users.forEach((user)=>{
    console.log(user.firstName);
})

for(let user of users){
    console.log(user.firstName);
}