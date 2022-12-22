// Use Prototype

// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years `
//     },
//     is18 : function(){
//         return this.age >= 18;
//     },
//     sing: function(){
//         return 'toon na na na la la';
//     }
// }

function createUser(firstName, lastName, email, age, address){
    const user = Object.create(createUser.prototype); // {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

// console.log(createUser.prototype);
createUser.prototype.about =  function(){
            return `${this.firstName} is ${this.age} years `
        };
 createUser.prototype.is18 =   function(){
            return this.age >= 18;
        }; 
 createUser.prototype.sing = function(){
            return 'toon na na na la la';
        }       




const user1 = createUser('alex', 'scott', 'alex@gmail.com', 'spanish');
console.log(user1);
console.log(user1.is18());