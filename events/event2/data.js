// function display(){
//     //let cdt=new Date().toDateString();
//     let cdt=new Date().toLocalestring();
//     console.log(cdt)
//     //document.writeln(cdt)
//     let p_ref=document.getElementById("xyz")
//     console.log(p_ref)
//     p_ref.innerHTML=cdt;
// }


function display(){
    document.getElementById("xyz").innerHTML=new Date().toLocaleString()
}