// prototype

function hello(){
    console.log("hello world");
}
hello();

// const hello = ["alex"];

 // name property
console.log(hello.name);

// you can add your own property

hello.myOwnProperty = "very unique value";
console.log(hello.myOwnProperty);

console.log(hello.prototype); // {}

if(hello.prototype){
    console.log("prototype is present");
}else{
    console.log("prototype is not present");
}

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing= function(){
    return "lalala";
}
console.log(hello.prototype.sing());