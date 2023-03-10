// spread

function someone(x, y) {
    return x + y;
}

let vari = [9, 7];
console.log(someone(...vari));

// rest

function sum(...args){
    console.log(args);
    let sum = 0;
    for(const x of args) {
        sum = sum + x;
    }
    return sum;
}

console.log(sum(1,2,3,4,5,6,7,8,9,0));

// try 
try{
    let firstname = 'alex';
    console.log(firstname + "" + lastname);
}catch(err){
     console.log(err.name, "Variable name missing");
}finally{
    console.log("I will run");
}

//  without error

try{
    let firstname = 'alex';
    console.log(firstname);
}catch(err){
     console.log("Variable name missing");
}finally{
    console.log("I will run");
}

// event loop

const userOne = () => {
    console.log('hello world');
};
const userTwo = () => {
    setTimeout(() => {
        console.log("hello i am inside");
    }, 3000);
    console.log('hello');
};
const userThree = () => {
    console.log('hi');
};

userOne();
userTwo();
userThree();


