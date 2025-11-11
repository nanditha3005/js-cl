function login(uname,status){

    return uname,status
}
let result=login("rahul",true)    //in js we cant return multiple values so rahul is overrided by true and printed .but in python we can get mutiple return values  
console.log(result)               //true