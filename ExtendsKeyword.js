// class practice

class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }

}

// const animal1 = new Animal("tom", 2);
// console.log(animal1);
// console.log(animal1.eat());

// class Dog {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     eat(){
//         return `${this.name} is eating`;
//     }

//     isSuperCute(){
//         return this.age <= 1;
//     }

//     isCute(){
//         return true;
//     }

// }

// const dog = new Animal("tom", 3);
// console.log(dog);
// console.log(dog.eat());
// console.log(dog.isCute());
// console.log(dog.isSuperCute());

class Dog extends Animal{

}

const tommy = new Dog("tommy", 3);
console.log(tommy);
console.log(tommy.eat());

