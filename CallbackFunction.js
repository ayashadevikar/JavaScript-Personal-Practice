// callback function

function myFunc2(){
    console.log("hello i am learning java script");
}


function myFunc(a){
    console.log("hello there I am back....");
    a();
   
    
}

myFunc(myFunc2);