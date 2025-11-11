function calc(){
     let numbers=[10,20,35,40,48]

     for(let num of numbers){
          if (num%2!==0){
              break;        //stops iteration and comes out of loop
            }
         console.log(num)    //10,20 
        }
}
calc()

let numbers1=[10,20,30,40,50]

for(let num1 of numbers1){
    if(num1%2!==0){
    return;        //comes out from block
    }
    console.log(num1)
}
console.log("GM")