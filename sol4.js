// Create a function that will accept an array and do the following:
// 1. Get the lowest element
// 2. Get the highest element
// 3. Get the length of array
// 4. Get the Average of all element;
// 5. Store these criteria in a new array


let arr=[7, 13, 3, 77, 100]
let arr2=[]
let min1=Math.min(...arr) 
let max2 = Math.max(...arr) 
let sum=0;
for(let i=0; i<arr.length; i++){
	sum=sum+arr[i]
	
}
sum=sum/arr.length
console.log(min1,max2,arr.length,sum)
