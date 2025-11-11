//using normal
function wish1(name1){
    return "Hello"+name1+"GM"
}
console.log(wish1("sonia"))


//using fat arrow
let wish2=(name2)=>{
    return "Hello "+name2+"GM"
}
let msg2=wish2("priyanka")
console.log(msg2)


//implicit return
let wish=name=>"Hello" + name + "Good Morning"
let msg=wish("rahul")
console.log(msg)