function a(){
    c()
    function c(){
        console.log(b)
    }
}
var b=10
a()

//output is 10 because before calling function a() we initilize variable b=10 then we call function c() before creating