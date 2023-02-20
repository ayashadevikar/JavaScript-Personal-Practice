// nested desturcturing

const users = [
    {userId: 1,firstName: 'alex', gender: 'male'},
    {userId: 2,firstName: 'john', gender: 'male'},
    {userId: 3,firstName: 'harry', gender: 'male'},
]

// const [user1, user2, user3] = users;
// console.log(user1);
// const [{firstName}, , {gender}] = users;
// console.log(firstName);
// console.log(gender);
const [{firstName: user1firstName}, , {gender: user3gender}] = users;
console.log(user1firstName);
console.log(user3gender);