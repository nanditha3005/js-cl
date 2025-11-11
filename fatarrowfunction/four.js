function add(){
    return a+b+1
}
let r2=add(10,20)
console.log(r2)


let add1=(a,b)=>{
    return a+b+1
}
let r3=add(10,20)
console.log(r3)


//simple form as there is only one return statement ,so we can neglect {}and return keyword
//as return is implicit return
let add2=(a,b)=>a+b+1

let r1=add2(10,20)
console.log(r1)            //31