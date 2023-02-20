// objects inside array
// very useful in real world applications

const users = [
    {userId: 1,firstName: 'alex', gender: 'male'},
    {userId: 2,firstName: 'john', gender: 'male'},
    {userId: 3,firstName: 'harry', gender: 'male'},
]

// console.log(users);
for(let user of users){
    console.log(user.userId);
}
