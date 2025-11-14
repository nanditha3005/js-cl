//synchronous
console.log('r1')
console.log('r2')
console.log('r3')
console.log('r4')            //r1,r2,r3,r4


//asyncronous
setTimeout(()=>{console.log("r1")},8000)
setTimeout(()=>{console.log("r2")},1000)
setTimeout(()=>{console.log("r3")},3000)
setTimeout(()=>{console.log("r4")},5000)          //r2,r3,r4,r1

