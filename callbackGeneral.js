// callback general

function myFunc(callback){
    console.log("function is doing task 1");
    callback();
}

myFunc(() => {
    console.log("function is genearting");
})