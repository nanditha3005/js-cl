let employees=[{"eid":1,"ename":"Guglielmo","gender":"Male"},
{"eid":2,"ename":"Daniel","gender":"Male"},
{"eid":3,"ename":"Shaw","gender":"Male"},
{"eid":4,"ename":"Mariel","gender":"Non-binary"},
{"eid":5,"ename":"Vittorio","gender":"Male"},
{"eid":6,"ename":"Yard","gender":"Male"},
{"eid":7,"ename":"Quincy","gender":"Male"},
{"eid":8,"ename":"Agustin","gender":"Male"},
{"eid":9,"ename":"Heindrick","gender":"Male"},
{"eid":10,"ename":"Florella","gender":"Female"},
{"eid":11,"ename":"Michel","gender":"Female"},
{"eid":12,"ename":"Chancey","gender":"Male"},
{"eid":13,"ename":"Silvana","gender":"Female"},
{"eid":14,"ename":"Pietra","gender":"Female"},
{"eid":15,"ename":"Lona","gender":"Female"},
{"eid":16,"ename":"Lev","gender":"Bigender"},
{"eid":17,"ename":"Lauryn","gender":"Female"},
{"eid":18,"ename":"Lorette","gender":"Female"},
{"eid":19,"ename":"Aubrie","gender":"Female"},
{"eid":20,"ename":"Leeanne","gender":"Non-binary"},
{"eid":21,"ename":"Fonz","gender":"Male"},
{"eid":22,"ename":"Giff","gender":"Polygender"},
{"eid":23,"ename":"Justino","gender":"Agender"},
{"eid":24,"ename":"Vanessa","gender":"Female"},
{"eid":25,"ename":"Cicely","gender":"Female"},
{"eid":26,"ename":"Tobe","gender":"Female"},
{"eid":27,"ename":"Emmalynne","gender":"Female"},
{"eid":28,"ename":"Eyde","gender":"Female"},
{"eid":29,"ename":"Hanny","gender":"Female"},
{"eid":30,"ename":"Cindee","gender":"Female"},
{"eid":31,"ename":"Adi","gender":"Female"},
{"eid":32,"ename":"Man","gender":"Male"},
{"eid":33,"ename":"Cy","gender":"Male"},
{"eid":34,"ename":"Chase","gender":"Male"},
{"eid":35,"ename":"Brok","gender":"Male"},
{"eid":36,"ename":"Sigismond","gender":"Male"},
{"eid":37,"ename":"Lorine","gender":"Female"},
{"eid":38,"ename":"Meaghan","gender":"Female"},
{"eid":39,"ename":"Jennifer","gender":"Female"},
{"eid":40,"ename":"Ravid","gender":"Male"},
{"eid":41,"ename":"Quentin","gender":"Male"},
{"eid":42,"ename":"Valentin","gender":"Male"},
{"eid":43,"ename":"Keen","gender":"Male"},
{"eid":44,"ename":"Marsha","gender":"Female"},
{"eid":45,"ename":"Hastings","gender":"Male"},
{"eid":46,"ename":"Baron","gender":"Genderqueer"},
{"eid":47,"ename":"Julianne","gender":"Female"},
{"eid":48,"ename":"Joelle","gender":"Female"},
{"eid":49,"ename":"Bertie","gender":"Female"},
{"eid":50,"ename":"Franciska","gender":"Female"},
{"eid":51,"ename":"Dotti","gender":"Female"},
{"eid":52,"ename":"Chelsea","gender":"Female"},
{"eid":53,"ename":"Katina","gender":"Female"},
{"eid":54,"ename":"Shelby","gender":"Male"},
{"eid":55,"ename":"Constanta","gender":"Female"},
{"eid":56,"ename":"Hubey","gender":"Male"},
{"eid":57,"ename":"Claiborne","gender":"Male"},
{"eid":58,"ename":"Jeth","gender":"Male"},
{"eid":59,"ename":"Josefa","gender":"Female"},
{"eid":60,"ename":"Ketty","gender":"Female"},
{"eid":61,"ename":"Tobiah","gender":"Male"},
{"eid":62,"ename":"Joella","gender":"Female"},
{"eid":63,"ename":"Koo","gender":"Female"},
{"eid":64,"ename":"Karel","gender":"Male"},
{"eid":65,"ename":"Peder","gender":"Male"},
{"eid":66,"ename":"Lloyd","gender":"Male"},
{"eid":67,"ename":"Aurelie","gender":"Female"},
{"eid":68,"ename":"Rosamond","gender":"Female"},
{"eid":69,"ename":"Heall","gender":"Male"},
{"eid":70,"ename":"Nico","gender":"Male"},
{"eid":71,"ename":"Nanete","gender":"Female"},
{"eid":72,"ename":"Cate","gender":"Female"},
{"eid":73,"ename":"Sybyl","gender":"Female"},
{"eid":74,"ename":"Lukas","gender":"Male"},
{"eid":75,"ename":"Nicoline","gender":"Genderfluid"},
{"eid":76,"ename":"Merla","gender":"Female"},
{"eid":77,"ename":"Grantham","gender":"Male"},
{"eid":78,"ename":"Olenolin","gender":"Male"},
{"eid":79,"ename":"Bernette","gender":"Female"},
{"eid":80,"ename":"Ly","gender":"Male"},
{"eid":81,"ename":"Verne","gender":"Male"},
{"eid":82,"ename":"Merissa","gender":"Female"},
{"eid":83,"ename":"Berkley","gender":"Male"},
{"eid":84,"ename":"Aleen","gender":"Female"},
{"eid":85,"ename":"Kory","gender":"Male"},
{"eid":86,"ename":"Bentlee","gender":"Male"},
{"eid":87,"ename":"Tim","gender":"Male"},
{"eid":88,"ename":"Sandye","gender":"Female"},
{"eid":89,"ename":"Guillemette","gender":"Female"},
{"eid":90,"ename":"Elyn","gender":"Female"},
{"eid":91,"ename":"Torre","gender":"Male"},
{"eid":92,"ename":"Sybyl","gender":"Female"},
{"eid":93,"ename":"Burton","gender":"Male"},
{"eid":94,"ename":"Norine","gender":"Female"},
{"eid":95,"ename":"Tommy","gender":"Female"},
{"eid":96,"ename":"Dorice","gender":"Female"},
{"eid":97,"ename":"Edd","gender":"Male"},
{"eid":98,"ename":"Mahmoud","gender":"Male"},
{"eid":99,"ename":"Etan","gender":"Male"},
{"eid":100,"ename":"Reinwald","gender":"Male"}]


//print all ename
for(let i=0;i<=employees.length-1;i++){
    console.log(employees[i].ename)
}


//print  female employees using for loop
for(let i=0;i<employees.length;i++){
    if(employees[i].gender==="Female"){
        console.log(`Name:${employees[i].ename} and gender:${employees[i].gender}`)
    }
}
 

//no of female employees
no_female_emp=0
for(let i=0;i<employees.length;i++){
    if(employees[i].gender==="Female"){
        no_female_emp=no_female_emp+1
    }
} 
console.log("No of Female Employees",no_female_emp)        //48