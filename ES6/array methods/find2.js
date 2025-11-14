let employees=[{eid:101,ename:"Rahul",gender:"male"},
    {eid:102,ename:"priyanka",gender:"female"},
    {eid:103,ename:"sonia",gender:"female"},
    {eid:104,ename:"modi",gender:"male"}
]
let emp =employees.find((emp)=>{
    //return emp.eid===108                          //undefined
    return emp.ename==="Rahul"                      //{ eid: 101, ename: 'Rahul', gender: 'male' }
})
console.log(emp)