// getter and setter

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    // setName(firstName, lastName){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }

    set fullName(fullName){
          const [firstName, lastName] = fullName.split(" ");
          this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person("john", "cart", 5);
// console.log(person1.fullName);
// console.log(person1.firstName);
// console.log(person1.lastName);

// person1.setName("alex", "kalp");

// person1.firstName = "alex";
// person1.lastName = "kalp";
// console.log(person1.firstName);
// console.log(person1.lastName);

person1.fullName = "alex kalp";
console.log(person1);
console.log(fullName);
