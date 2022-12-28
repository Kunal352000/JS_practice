// // Write a JavaScript function to reverse words in a given string.
// let str1="kunal"
// let rev_str=""
// for(let i = str1.length - 1; i >= 0; i--){
//     rev_str=rev_str+str1[i]
// }
// console.log(rev_str)
function revStr(str1) {
    let newStr = "";
    for (let i = str1.length - 1; i >= 0; i--) {
        newStr += str1[i];
    }
    return newStr;
}
console.log(revStr('welcome'));
