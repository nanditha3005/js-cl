let emp={eid:101,ename:"rahul",details:{email:"abc@gmail.com",loc:"wayanad"}}
//using normal 
//console.log(ename)                   //reference error
console.log(emp.ename)               //rahul
console.log(emp.details.loc)         //wayanad

//to make it simple we use array destructoring
let {ename}=emp;
console.log(ename)          //rahul

let {eid,details}=emp;
let {loc}=details;
console.log(loc)           //wayanad                                    
