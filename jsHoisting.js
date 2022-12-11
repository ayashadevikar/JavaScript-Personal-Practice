  // hoisting

console.log(this);
console.log(window);
console.log(myFunction);
myFunction();
console.log(fullName);

function myFunction(){
    console.log("this is my function");
}

var firstName = "john";
var lastName = "cart";
var fullName = firstName + " " + lastName;
console.log(fullName);