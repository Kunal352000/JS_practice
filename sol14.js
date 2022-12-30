let str1="welcome to the javascript"
let str2=str1.split(' ')
// console.log(str2)
let arr=[]
for(let i=0; i<str2.length; i++){
    arr[i] = str2[i].charAt(0).toUpperCase()+str2[i].slice(1)
}
console.log(arr.join(" "))