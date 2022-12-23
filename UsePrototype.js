// Use Prototype

const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years `
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing: function(){
        return 'toon na na na la la';
    }
}

function createUser(firstName, lastName, email, age, address){
    const user = Object.create(userMethods); // {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

const user1 = createUser('alex', 'scott', 'alex@gmail.com', 'spanish');
console.log(user1);