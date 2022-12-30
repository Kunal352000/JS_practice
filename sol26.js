let arr1=[1, 2, 3];
let arr2=[100, 2, 1, 10]
let arr3=[]
for(let i=0;i<arr1.length;i++){

    for(let j=0;j<arr2.length;j++){
        if(arr3[j]!=arr2[j]){
            arr3.push(arr2[j])
            // arr3.push(arr2[i])
        }
    }
}
console.log(arr3)
