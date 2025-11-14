/**
 * @typedef {{nemzetiseg:string, szerzo:string, mu:string, szerzo2:string, mu2:string}} CountryWriters 
 */

/**
 * @param {*} form 
 * @param {*} Id 
 * @param {*} LabelContent 
 */

function createFormElement(form, Id, LabelContent){

    const div = document.createElement("div")
    form.appendChild(div)

    const label = document.createElement("label")
    form.appendChild(label)
    label.innerText = LabelContent
    label.htmlFor = Id

    const input = document.createElement("input")
    form.appendChild(input)
    input.id = Id
    input.type = 'text'
    
    const span = document.createElement("span")
    span.classList.add("error")
}

/**
 * 
 * @param {*} cellType 
 * @param {*} cellContent 
 * @param {*} parentRow 
 */

function createCell(cellType, cellContent, parentRow){ //6 helyre implementalni?
    //megcsinalja a cella celltype alapján
    //megcsinálja az innerTextjét
    //hozzáfűzni a parentrowhoz
    //visszatér cellával
}

/**
 * 
 * @param {*} table 
 * @param {*} header 
 */

function generateHeader(table, header){
    //letrehoz theadet
    //hozzácsatolja a table parameterhez
    //létrehoz egy tablerrowt
    //hozzácsatolja a tableheadhez
    //végigiterál a második paraméteren és léthozza a cellát

}

/**
 * 
 * @param {*} e 
 */

function HTMLEventListener(e){
     e.preventDefault() //alapértelmezett működést gátolja meg
    /**
     * @type {HTMLFormElement}
     */
    const b = e.target //itt a target a htmlformelement

    /**
     * @type {HTMLInputElement}
     */
    const nemzetiseg = b.querySelector('#nemzetiseg')
    /**
     * @type {HTMLInputElement}
     */
    const szerzo1 = b.querySelector('#szerzo1')
    /**
     * @type {HTMLInputElement}
     */
    const szerzo2 = b.querySelector('#szerzo2')
    /**
     * @type {HTMLInputElement}
     */
    const mu1 = b.querySelector('#mu1')
    /**
     * @type {HTMLInputElement}
     */
    const mu2 = b.querySelector('#mu2')

    /**
     * @type {string}
     */
    const nemz = nemzetiseg.value;
     /**
     * @type {string}
     */
    const szerz1 = szerzo1.value;
     /**
     * @type {string}
     */
    const szerz2 = szerzo2.value;
     /**
     * @type {string}
     */
    const muu1 = mu1.value
     /**
     * @type {string}
     */
    const muu2 = mu2.value


    /**
     * @type {{nemzetiseg:string, szerzo:string, mu1:string, szerzo2:string, mu2:string}}
     */
    const obj = {}
    obj.nemzetiseg = nemz
    obj.szerzo = szerz1
    obj.szerzo2 = szerz2
    obj.mu1 = muu1
    obj.mu2 = muu2

    const tbody = document.getElementById("tbody_azon")

    const tr1 = document.createElement("tr")
    tbody.appendChild(tr1)

    const td1 = document.createElement("td")
    tr1.appendChild(td1)
        
    const td2 = document.createElement("td")
    tr1.appendChild(td2)
    
    const td3 = document.createElement("td")
    tr1.appendChild(td3)

    td1.innerText = obj.nemzetiseg
    td2.innerText = obj.szerzo1;
    td3.innerText = obj.mu1;

    if (obj.mu2 && obj.szerzo2){

        const tr2 = document.createElement("tr")
        tbody.appendChild(tr2)

        const td4 = document.createElement("td")
        tr2.appendChild(td4)
        td4.innerText = obj.szerzo2

        const td5 = document.createElement("td")
        tr2.appendChild(td5)
        td5.innerText = obj.mu2

        td1.rowSpan = 2
    }

}

/**
 * 
 * @param {HTMLInputElement} inputfield1 
 * @param {HTMLInputElement} inputfield2 
 * @param {HTMLInputElement} inputfield3 
 */
function validateFields(inputfield1, inputfield2, inputfield3){

    let valid = true
    if (inputfield1.value == ""){
        const parentDiv = inputfield1.parentElement
        const err = parentDiv.querySelector(error)
        err.innerText = 'Mező kitöltése kötelező'
        valid = false
    }
    return valid
}