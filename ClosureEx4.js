function func(){
    let counter = 0;
    return function(){
        if(counter < 1){
            console.log("hi, you are called me");
             counter++;
        }else{
            console.log("mai already ek bar call ho chuka hu");
        }
    }
    

}


const myFunc = func();
myFunc();
myFunc();
myFunc();
const myFunc2 = func();
myFunc2();
myFunc2();