const obj = {}
let szam = 7

if (szam > 5){
    obj.szam = "cucc"
}
else{
    obj["szam"] = "szam"
}
console.log(obj)

/*
let val = 6
val == "6" // igaz
val === "6" // hamis lesz, mert 3db "=" jel

if (obj.age == null){ // igaz
}
*/

if (obj.age === null){ // hamis | "===" csak akkor kell ha konkretan null van megadva (ebben a helyzetben legalabbis null) 
}

if (obj.age){ //false  
}

if (!obj.age){ //true
}

if (!true){ //false
}