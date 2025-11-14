let employees=[{eid:101,ename:"Rahul",gender:"male"},
    {eid:102,ename:"sonia",gender:"female"},
    {eid:103,ename:"priyanka",gender:"female"},
    {eid:104,ename:"Rahul",gender:"male"},
    {eid:105,ename:"modi",gender:"male"},
    {eid:106,ename:"indira",gender:"female"}
]
let male_employees=[]
for (let emp of employees){
    if(emp.gender==="male"){
        male_employees.push(emp)
    }
}
console.log(male_employees)

//using fat arrow function
let male_employees1=employees.filter((emp)=>{
    return emp.gender==="male"
})
console.log(male_employees1)

//using implicit return
let male_employees2=employees.filter(emp=>employees.gender="male")
console.log(male_employees2)

//using find 
let employee=employees.find(emp=>emp.ename==="sonia")
console.log(employee)