// if-else

let age = 18;
if(age >=18 ){
    console.log("User go");
}else{
    console.log("User dont go");
}


// switch 

let users = 3;

switch(users){
    case 1: {
       console.log("hello");
       break;
    }

    case 2: {
        console.log("bye");
        break;
    }

    default: {
        console.log("hi");
        break;
    }
}


// ternary operator / ternary condition

let user = true;
user? console.log("login") : console.log("false");


// date

const now = new Date();
console.log(now);

// toString

console.log(now.toString());

// getFullYear

console.log(now.getFullYear());

// getMonth

console.log(now.getMonth());

// getDay

console.log(now.getDay());

// getTime

console.log(now.getTime());

// getHours

console.log(now.getHours());

// getMinutes

console.log(now.getMinutes());

// getSeconds

console.log(now.getSeconds());

// Math

const PI = Math.PI;
console.log(PI);


// round

console.log(Math.round(10.9));

// floor

console.log(Math.floor(9.5));

// ceil

console.log(Math.ceil
    (9.5));

// min 

console.log(Math.min(10,1,2,3,5));

// max

console.log(Math.max(10,1,2,3,5));

// random

console.log(Math.random() * 3);

// power

console.log(Math.pow(3,2));

// log

console.log(Math.log(2));

// trignometry

console.log(Math.sin(60));

for(let i = 0; i<=10;i++){
    console.log(`${i} * ${i} = ${i*i}`);
}
