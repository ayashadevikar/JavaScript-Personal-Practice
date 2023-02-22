// function returning function



// function myFunc(){
//     function hello(){
//         console.log("hello world");
//     }
//     return hello;

// }

// const ans = myFunc();
// ans();

function hello(){
    function hello2(){
        console.log("hello world");
    }
    return hello2;
}

const ans = hello();
ans();