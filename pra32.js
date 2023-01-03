function x(){
    var a=7;
     return function y(){ // same as next 
        console.log(a)
    }
}
var z=x()
console.log(z)
z();

// we got the output whole function y and value 7