// lexical environment, scope chain

const lastName = "cart";

const printName = function(){
    const firstName = "alex";
    console.log(firstName);
    console.log(lastName);
}

printName();