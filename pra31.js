function x(){
    var a=7;
    function y(){
        console.log(a)
    }
    return y; //return statment is return where function is called so it return whole function y
}
var z=x() //what we get in the return we storted in the var z 
console.log(z)

// we got output --> [Function: y]


// important note--> as we stored the return in z then x() is deletd in the memory space and var z is stored the whole function that is known as closure