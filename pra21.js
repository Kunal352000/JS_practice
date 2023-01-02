let b=10000
{
    var a=10
    let b=20
    const c=30
    console.log(a)//10
    console.log(b)//20
    console.log(c)//30
}
console.log(b)//10000

// block scope b=20 & c=30
// script scope b=10000
// global scope a=10