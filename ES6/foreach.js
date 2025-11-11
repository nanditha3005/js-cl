let enames=["rahul","sonia","priyanka","modi"]

let new_name=enames.forEach((ename)=>{
    return ename.toUpperCase()
})
console.log(enames)              //[ 'rahul', 'sonia', 'priyanka', 'modi' ]
console.log(new_name)            //undefined
