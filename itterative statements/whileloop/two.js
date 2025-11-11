let employees=[{"eid":1,"ename":"Feodor","gender":"Polygender"},
{"eid":2,"ename":"Rorke","gender":"Male"},
{"eid":3,"ename":"Eydie","gender":"Female"},
{"eid":4,"ename":"Krista","gender":"Female"},
{"eid":5,"ename":"Hillard","gender":"Male"},
{"eid":6,"ename":"Northrup","gender":"Male"},
{"eid":7,"ename":"Natividad","gender":"Female"},
{"eid":8,"ename":"Alexei","gender":"Male"},
{"eid":9,"ename":"Gale","gender":"Female"},
{"eid":10,"ename":"Emiline","gender":"Female"},
{"eid":11,"ename":"Stevena","gender":"Female"},
{"eid":12,"ename":"Cosette","gender":"Female"},
{"eid":13,"ename":"Tadio","gender":"Male"},
{"eid":14,"ename":"Arley","gender":"Male"},
{"eid":15,"ename":"Stephanus","gender":"Male"},
{"eid":16,"ename":"Wenda","gender":"Female"},
{"eid":17,"ename":"Tiphanie","gender":"Female"},
{"eid":18,"ename":"Ailene","gender":"Polygender"},
{"eid":19,"ename":"Richart","gender":"Male"},
{"eid":20,"ename":"Abbie","gender":"Genderfluid"},
{"eid":21,"ename":"Katalin","gender":"Female"},
{"eid":22,"ename":"Ruthi","gender":"Female"},
{"eid":23,"ename":"Wernher","gender":"Male"},
{"eid":24,"ename":"Cymbre","gender":"Female"},
{"eid":25,"ename":"Ursula","gender":"Female"},
{"eid":26,"ename":"Courtney","gender":"Polygender"},
{"eid":27,"ename":"Donica","gender":"Female"},
{"eid":28,"ename":"Casper","gender":"Male"},
{"eid":29,"ename":"Karyn","gender":"Bigender"},
{"eid":30,"ename":"Karrah","gender":"Female"},
{"eid":31,"ename":"Aundrea","gender":"Female"},
{"eid":32,"ename":"Aeriel","gender":"Female"},
{"eid":33,"ename":"Sarette","gender":"Female"},
{"eid":34,"ename":"Johanna","gender":"Female"},
{"eid":35,"ename":"Chickie","gender":"Male"},
{"eid":36,"ename":"Aggie","gender":"Female"},
{"eid":37,"ename":"Faustine","gender":"Female"},
{"eid":38,"ename":"Carlin","gender":"Male"},
{"eid":39,"ename":"Aldus","gender":"Male"},
{"eid":40,"ename":"Cello","gender":"Male"},
{"eid":41,"ename":"Felike","gender":"Male"},
{"eid":42,"ename":"Thornie","gender":"Male"},
{"eid":43,"ename":"Evered","gender":"Male"},
{"eid":44,"ename":"Arron","gender":"Male"},
{"eid":45,"ename":"Lani","gender":"Non-binary"},
{"eid":46,"ename":"Jazmin","gender":"Female"},
{"eid":47,"ename":"Umeko","gender":"Female"},
{"eid":48,"ename":"Sig","gender":"Male"},
{"eid":49,"ename":"Tobias","gender":"Male"},
{"eid":50,"ename":"Herve","gender":"Male"},
{"eid":51,"ename":"Noam","gender":"Male"},
{"eid":52,"ename":"Lloyd","gender":"Male"},
{"eid":53,"ename":"Giavani","gender":"Male"},
{"eid":54,"ename":"Leeann","gender":"Female"},
{"eid":55,"ename":"Elsey","gender":"Female"},
{"eid":56,"ename":"Eldin","gender":"Bigender"},
{"eid":57,"ename":"Elle","gender":"Female"},
{"eid":58,"ename":"Tynan","gender":"Bigender"},
{"eid":59,"ename":"Uri","gender":"Male"},
{"eid":60,"ename":"Annora","gender":"Female"},
{"eid":61,"ename":"Welsh","gender":"Male"},
{"eid":62,"ename":"Zahara","gender":"Female"},
{"eid":63,"ename":"Tamiko","gender":"Female"},
{"eid":64,"ename":"Zachary","gender":"Non-binary"},
{"eid":65,"ename":"Philis","gender":"Female"},
{"eid":66,"ename":"Samuel","gender":"Male"},
{"eid":67,"ename":"Coop","gender":"Male"},
{"eid":68,"ename":"Gilberte","gender":"Female"},
{"eid":69,"ename":"Delphine","gender":"Female"},
{"eid":70,"ename":"Ellie","gender":"Female"},
{"eid":71,"ename":"Carol","gender":"Female"},
{"eid":72,"ename":"Delcine","gender":"Female"},
{"eid":73,"ename":"Catlin","gender":"Female"},
{"eid":74,"ename":"Benoit","gender":"Male"},
{"eid":75,"ename":"Killy","gender":"Male"},
{"eid":76,"ename":"Maressa","gender":"Female"},
{"eid":77,"ename":"Clemmie","gender":"Female"},
{"eid":78,"ename":"Reeba","gender":"Agender"},
{"eid":79,"ename":"Gloriane","gender":"Female"},
{"eid":80,"ename":"Kalvin","gender":"Polygender"},
{"eid":81,"ename":"Link","gender":"Male"},
{"eid":82,"ename":"Eden","gender":"Female"},
{"eid":83,"ename":"Averill","gender":"Male"},
{"eid":84,"ename":"Bil","gender":"Genderqueer"},
{"eid":85,"ename":"Evin","gender":"Male"},
{"eid":86,"ename":"Bendix","gender":"Male"},
{"eid":87,"ename":"Dimitry","gender":"Male"},
{"eid":88,"ename":"Cicily","gender":"Female"},
{"eid":89,"ename":"Wyatt","gender":"Male"},
{"eid":90,"ename":"Moshe","gender":"Male"},
{"eid":91,"ename":"Dannye","gender":"Female"},
{"eid":92,"ename":"Gordy","gender":"Male"},
{"eid":93,"ename":"Mattie","gender":"Male"},
{"eid":94,"ename":"Theodora","gender":"Female"},
{"eid":95,"ename":"Cherice","gender":"Female"},
{"eid":96,"ename":"Dannie","gender":"Agender"},
{"eid":97,"ename":"Valenka","gender":"Female"},
{"eid":98,"ename":"Ernesto","gender":"Polygender"},
{"eid":99,"ename":"Chariot","gender":"Bigender"},
{"eid":100,"ename":"Bernie","gender":"Non-binary"}]

//to print all  employees
let i=0;
while(i<=employees.length-1){
    console.log(employees[i].ename)
    i++;
}


//to print all female employees
let j=0;
while(j<=employees.length-1){
    if (employees[j].gender==="Female"){
        console.log(employees[j].ename)
        
    }
    j++;
}

//to print no of female employees
let no_female_employes=0;
let k=0
while(k<=employees.length-1){
    if(employees[k].gender==="Female"){
        console.log(employees[k].ename)
       
    }
     k++;
}
console.log(no_female_employes)