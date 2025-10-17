const szam = 6; //globalis scope, tehat az egeszben el lehet erni

valami(); //elobb van meghivva mint leirva: "hoisting"
valami2();
valami3();
valami4();

/**
 * Ez fuggveny
 * 
 * @returns {void} // "void" azt jelenti hogy undefined-ot add vissza a fuggveny
 */
function valami(){
    console.log("hahaaha")
}

/**
 * 
 * @returns {void}
 */
function valami2(){
    console.log(szam); //elerjuk a "szam" valtozot, mert a kisebb scopebol el lehet erni a nagyobbat
}

/**
 * Lokalis valtozot (b) fog tartalmazni
 * 
 * @returns {void}
 */
function valami3(){
    const b = 9;
    console.log(b)
}

const opsum = valami4(2) //meghivjuk a fuggvenyt parameterrel (para1)

/**
 * @param {number} para1 - ez a bemeneti paraméter
 * @returns {number}
 */
function valami4(para1){
    const num = 6;
    const c = num + para1;
    return c;
}

console.log(opsum) // le logoljuk a valtozot amivel meghivtuk a valami4-et