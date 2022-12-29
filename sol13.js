// Write a JavaScript function to capitalize the first letter of a string.
// str1="welcome";
// str2=(str1.charAt(0).toUpperCase())
// console.log(str2,str1.slice(1))

// str1="welcome to the training"
// console.log(str1.charAt(0).toUpperCase()+str1.slice(1))

function firstWordCapital(str1){
    return str1.charAt(0).toUpperCase()+str1.slice(1)
}
console.log(firstWordCapital("welcome to the javascripte"))
