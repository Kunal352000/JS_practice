// Write a JavaScript function to check whether a string is blank or not.
// str1="welcome"
// if(str1===""){
//     console.log(true)
// }else{
//     console.log(false)
// }


function emptyString(str1){
    if(str1===""){
        return true
    }else{
        return false
    }
}
console.log(emptyString('welcome'));
console.log(emptyString(""));