function great(){
    console.log(this)
}
great()


let greet=()=>{
    console.log(this)
}
greet()                          //{}