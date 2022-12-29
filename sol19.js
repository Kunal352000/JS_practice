// Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15.
// let num1=2
// let num2=13
// if(num1===15 || num2===15 || num1+num2===15 || num1-num2===15){
//     console.log(true)
// }else{
//     console.log(false)
// }

function check15(num1,num2){
    return (num1===15||num2===15||num1+num2===15||num1-num2===15)
}
console.log(check15(2,13))
console.log(check15(1,15))