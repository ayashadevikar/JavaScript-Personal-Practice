// arrow function

// const hello = () => {
//         console.log("world");
//     }

//     hello();


    const hello = () => {
        console.log("hello world");
    }
    
    hello();
    
    // const twoPlusFour = () => {
    //     console.log(2+4);
    // }
    
    // twoPlusFour();
    
    // function twoPlusFour(){
    //     return 2+4;
    // }
    
    // console.log(twoPlusFour());
    
    // const returnedValue2 = twoPlusFour();
    // console.log(returnedValue);
    
    
    // function sumTwoNumbers(number1, number2){
    //     return number1 + number2;
    // }
    
    // const returnedValue1 = sumTwoNumbers(4,5);
    // console.log(returnedValue1);
    
    const sumThreeNumbers = (number1, number2, number3) => {
        return number1 + number2 + number3;
    }
    
    const returnedValue = sumThreeNumbers(4,5,6);
    console.log(returnedValue);
    
    // isEven
    // input : 1 number
    // output : true, false
    
    // function isEven(number){
    //       return number % 2 === 0;
    // }

    const isEven = number => number % 2 === 0;
    
    console.log("isEven");
    
    // console.log(isEven(4));
    
    // function
    // input : string
    // output : firstCharacter
    
    // function firstChar(anyString){
    //       return anyString[0];
    // }
    
    // console.log(firstChar("abc"));
    
    // function findTarget(array, target){
    //     for(let i = 0; i<array.length; i++){
    //         if(array[i]===target){
    //             return i;
    //         }
    //     }
    //     return -1;
    // }
    // const myArray = [1,3,8,90];
    // const ans = findTarget(myArray, 8);
    // console.log(ans);
    
    