let gotogoa=(success,failure)=>{
    let acc_bal=8000;
      if (acc_bal>=15000){
        success("go and enjoy")
     }
      else{
        failure("go and study")
     }

}
gotogoa((msg)=>{console.log(msg)},(err)=>{console.log(err)})

