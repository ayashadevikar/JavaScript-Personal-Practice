// setTimeout

console.log("script start");
setTimeout(() => {
    console.log("inside setTimeout");
}, 1000);

console.log("Script end");

console.log("script start");
setTimeout(() => {
    console.log("inside setTimeout");
}, 0);


for (let i=2; i < 100; i++){
    console.log(".....");
}
console.log("Script end");
