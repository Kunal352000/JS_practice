function x(){
    var a=7;
    function y(){
        console.log(a)
    }
    a=100 // a is updated 
    return  y
}
var z=x() // after this statment x() is deleted in the memory
console.log(z)
z() //it stores the x() function that why we called z()