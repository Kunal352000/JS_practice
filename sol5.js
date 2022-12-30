// Create a Function and return the index location of an element from a given array. First argument is the array you'd like to search and the second one is the element (either string/number) to look for.
let arr=['github', 'gitlab', 'bitbucket', 'apollo']
let str1="apollo"
for(let i=0;i<arr.length;i++){
    if(str1==arr[i]){
        console.log(i);
    }
}