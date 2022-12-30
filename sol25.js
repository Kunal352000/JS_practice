let array1 = [1,0,2,3,4];
let array2 = [3,5,6,7,8,13];
let array3=[]
if(array1.lenght>array2.length){
for(let i=0; i<array1.length; i++){
    array3.push(array1[i]+array2[i])
}
}
else{
    for(let i=0; i<array2.length; i++){
        array3.push(array1[i]+array2[i])
    } 
}

console.log(array3)