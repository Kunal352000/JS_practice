function x(){
    var a=7;
    function y(){
        console.log(a)
    }
    return y; // it return the statement to x() and we stored the x() in var z
}
var z=x()
console.log(z)
z(); //z has the stored the whole y function and x() is deleted in the memory thats why we called z() and this is known as closure