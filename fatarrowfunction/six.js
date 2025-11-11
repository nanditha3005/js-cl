// function wish(){
//     console.log("gm")
// }
// wish()             //gn
// function wish(){
//     console.log("gn")
// }
// wish()                //gn       function overridding in normal function


var wish=()=>{
    console.log("GM")
}
wish()               //GM

var wish=()=>{
    console.log("GN")
}
wish()               //GN     FUNCTION OVERRIDIING is not applicable in fat arrow function