pname="Marker Pen";
class product{
    constructor(){
        console.log("product class component")
    }
    get_product_Details(){
        console.log("Getting products")
        }  
}
//default export
module.export=product

//named export
//module.export={pname,product}