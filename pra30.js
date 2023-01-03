function x(){
    var a=7;
    function y(){
        console.log(a) //it searches the a first in the function body if its not present in the function body then priority goes to parent lexiacl analysis
    }
    y()
}
x()

