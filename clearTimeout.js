// clearTimeout

// console.log("script start");
// setTimeout(() => {
//     console.log("inside setTimeout");
// }, 1000);

// console.log("Script end");

console.log("script start");
const id = setTimeout(() => {
    console.log("inside setTimeout");
}, 1000);


for (let i=2; i < 100; i++){
    console.log(".....");
}
console.log("setTimeout id is ", id);
console.log("clearing time out");
clearTimeout(id);
console.log("Script end");
