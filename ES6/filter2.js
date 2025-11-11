//even numbers using normal for loop without filter
let number=[11,7,8,232,1055,41,8,12]
let evn_nums=[]
for(let num of number){
    if(num%2===0){
        evn_nums.push(num)
    }
}
console.log(number)
console.log(evn_nums)      //[ 8, 232, 8, 12 ]


//using filter
let numbers=[11,7,8,232,1055,41,8,12]

let even_nums=numbers.filter((num)=>{
    return num%2===0
})
console.log(numbers)
console.log(even_nums)


//using implicit return asthere is only one return statement
let numberss=[11,7,8,232,1055,41,8,12]
let evenn_num=numberss.filter(num=>num%2===0)
console.log(numberss)
console.log(evenn_num)

