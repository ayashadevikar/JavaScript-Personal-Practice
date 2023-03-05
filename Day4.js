// function

function hello(){
    console.log("hello world");
}
hello();

function sum(value1,value2){
    let result = value1 + value2;
    return result;
}

let add = sum(10,20);
console.log(add);



// string

function URL(url, domain){
    let con = 'https://';
    let result = con + url + domain;
    return result;
}

let site = ('harrypotter','.me');
console.log(site);

function sum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
       
    }
    return sum;
}

let sumarray = [1,2,3,4,5,6,7,8,9];
let arrresult = sum(sumarray);
console.log(arrresult);


function adds() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum = sum + arguments[i];
    }

    return sum;
}

console.log(adds(1,7,89,88,8,4,35,67,88,4));

// arrow function

let sum1 = (var1, var2) => {
    console.log('hello', var1, var2);
};
sum1(1,2);

// object

let userName = {
    firstName: 'alex',
    age: 22,
    lastName: 'xander',
    gender: 'male',
};

console.log(userName);
console.log(userName.firstName);
userName.firstName = 'John';
console.log(userName);