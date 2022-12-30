let arr=[ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]
let arr2=[]
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
        if(arr[i]<arr[j]){
            let x=arr[i]
            arr[i]=arr[j]
            arr[j]=x
        }
    }
}
console.log(arr)