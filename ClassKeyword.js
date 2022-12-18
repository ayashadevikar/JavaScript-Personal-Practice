// class keyword
// 2015 / es6
// class are fake

class CreateUser{
     constructor(firstName, lastName, email, age, address){
        console.log("constructor called");
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
     }

     about(){
        return `${this.firstName} is ${this.age} years `
     }
     is18(){
        return this.age >= 18;
     }
     sing(){
        return 'toon na na na la la';
     }
     func(a){
        console.log(a);
     }
}
    

const user1 = new CreateUser('alex', 'scott', 'alex@', 'surat');
console.log(user1.is18());
console.log(Object.getPrototypeOf(user1));
user1.func(12);

