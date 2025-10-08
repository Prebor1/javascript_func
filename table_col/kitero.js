
    console.log("Hello World")
    let valtozo1 = "Random szöveg"

    /** 
     * @type{string}
    */
    const valtozo2 = "Konstans szöveg" 

    /** 
     * @type{string[]}
    */
    const arr = ["alma", "valami", "text"]
    arr[0]
    arr[1]
    arr[2]
    // ezeket nem irja ki mert "consol.log" nincs

    for (let i = 0; i < arr.length; i++)  //ez a sima for ciklus, vegigmegyunk az egesz "arr" tombon
    { 
            console.log(arr[i]); 
    };

    for (const index in arr)  // "for in" ciklus: végigmegy egy objektum nevein vagy egy tomb sorszamain (mert in = valami-ben, azaz pl. ciklus-BAN)
    {
        console.log(index, arr[index]);
    };

    for (const value of arr) // a ciklus vegigmegy egy tomb ertekein (pl. az arr-nak az ertekei: ["alma", "valami", "text"] )
    { 
        console.log(value); 
    };

    /**
     * @type{{nev:string, age:number}}
     */
    const a ={
        nev:'gomszab',  
        age: 24

        /*nev es age = key; "gomszab" es 24 = value*/ 
    }
    console.log(a)

    arr.push("egy negyedik ertek!!!");
    console.log(arr);

    /** 
    * @type{{name: {string}, age: {number}[]}
    **/ 
    const people = [ 
        { name: "Sandor", age: 24 }, 
        { name: "Bela", age: 21 }, 
        { name: "Pista", age: 30 }, ];

    for (const person of people)
    { 
        console.log(person.name); 
    }
