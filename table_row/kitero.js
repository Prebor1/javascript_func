let valtozo = "text";
const obj = {};

obj.ertek = 10;
console.log(obj.ertek);

let szam = 7;

if (szam > 5){
    obj["ujcucc"] = "cucc";
}
else{
    obj[valtozo] = "szovegszoveg";
}
console.log(obj);

let val = 6
if (val == "6"){  // igaz
    console.log('true')
}
if (val === "6"){ // hamis lesz, mert 3db "=" jel
    console.log('false')
}

if (obj.age == null){ // igaz
}


if (obj.age === null){ // hamis | "===" csak akkor kell ha konkretan null van megadva (ebben a helyzetben legalabbis null) 
}

if (obj.age){ //false  
}

if (!obj.age){ //true
}

if (!true){ //false
}