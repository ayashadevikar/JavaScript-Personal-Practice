// promise

const bucket = ['coffee', 'chips', 'vegetabl' , 'salt' , 'rice'];

const friedRicePromise = new Promise((resolve,reject)=>{
     if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
        resolve("Fried Rice");
     }else{
        reject("Couldn't do it");
     }
})


// produce

// consume
// how to consume

friedRicePromise.then((myfriedRice)=>{
    console.log("lets eat ", myfriedRice);
}).catch(
    (error)=>{
        console.log(error)
    }
)