// closures

// function can return functions

function myFunc(){
    return {a: "1"};
}

const ans = myFunc();
console.log(ans);


function outerFunction(){
    function innerFunction(){
        console.log("hello world");
    }

    return innerFunction;
}

const ans1 = outerFunction();
console.log(ans1);
ans1();
