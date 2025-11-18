/**
 * @typedef {{nemzetiseg:string, szerzo:string, mu:string, szerzo2:string, mu2:string}} CountryWriters 
 */


/**
 * @typedef {{id:string, label:string}} FormField
 */


/**
 * renderTableBody()-hoz tartozik
 * a jsdoc-ot is nyilvan magunkkal hoztuk ide le
 * @param {CountryWriters[]}
 */

function renderTableBody(array){
    const tablebody = document.getElementById('tablebody');
    tablebody.innerHTML = "";

    for (const sor of array){
    
    const tr1 = document.createElement("tr");
    tbody.appendChild(tr1);

    const td1 = document.createElement("td");
    tr1.appendChild(td1);

    td1.addEventListener('click', function(e){
        /**
         * @type {HTMLTableCellElement}
         */
        const a = e.target
        a.classList.add('marked')
    })
    
    const td2 = document.createElement("td");
    tr1.appendChild(td2);
    
    const td3 = document.createElement("td");
    tr1.appendChild(td3);

    td1.innerText = sor.nemzetiseg;
    td2.innerText = sor.szerzo1;
    td3.innerText = sor.mu1;

    if (sor.mu2 != undefined && sor.szerzo2 != undefined){

        const tr2 = document.createElement("tr");
        tbody.appendChild(tr2);

        const td4 = document.createElement("td");
        tr2.appendChild(td4);
        td4.innerText = sor.szerzo2;

        const td5 = document.createElement("td");
        tr2.appendChild(td5);
        td5.innerText = sor.mu2;

        td1.rowSpan = 2;
    }
}}

//----------------------------------------------------------------------------

/**
 * createFormElement()-hez tartozik
 * @param {string} form 
 * @param {string} id 
 * @param {string} labelContent 
 * 
 */

function createFormElement(form, id, labelContent) {

    const div = document.createElement("div");
    form.appendChild(div);

    const br0 = document.createElement("br")
    //form.appendChild(br0)

    const label = document.createElement("label");
    label.innerText = labelContent;
    label.htmlFor = id;
    //jform.appendChild(label);

    const br1 = document.createElement("br")
    //form.appendChild(br1)
    
    const input = document.createElement("input");
    input.type = "text";
    input.id = id;
    input.name = id;
    //form.appendChild(input);

    const br2 = document.createElement("br");
    //form.appendChild(br2);

    const br3 = document.createElement("br")
    //form.appendChild(br3)

    const span = document.createElement("span")
    span.classList.add("error")

    div.appendChild(label);
    div.appendChild(br1);
    div.appendChild(input);
    div.appendChild(span);
    div.appendChild(br2);
    div.appendChild(br3);
}

//----------------------------------------------------------------------------

/**
 * renderTableRow()-hoz tartozik
 * @param {HTMLTableSectionElement} tableBody 
 * @param {CountryWriters} CountryWriters 
 * A függvény a táblázat egy (dupla) sorának a kirendereléséért felel. 
 * Ezt két helyen tudtuk használni: a htmles formunk eseménykezelőjében,
 * illetve renderTableBody függvényben.
 */

function renderTableRow(tableBody, CountryWriters) {

    const tr = document.createElement("tr"); // egy sor letrehozasa
    tableBody.appendChild(tr); // sor hozzáadása a tablazat torzsehez

    const td1 = renderTableCell("td", CountryWriters.nemzetiseg, tr); // nemzetiseg cella
    
    td1.addEventListener("click", function(e){ 
        /**
         * @type {HTMLTableCellElement}
         */

        const esemeny = e.target; // ez a td elem, amire kattintottunk

        const row = esemeny.parentElement; // a td szuloje a tr (sor) elem
        const tbody = row.parentElement; // a tr szuloje a tbody (tablazat torzs) elem

        const alreadyMarked = tbody.querySelector(".marked"); // megkeressuk, hogy van-e mar olyan elem, aminek a 'marked' osztalya van

        if (alreadyMarked !== null) { // ha van ilyen elem (azaz nem null az ertek)...
            alreadyMarked.classList.remove('marked'); // akkor eltavolitjuk rola a 'marked' osztalyt
        }

        esemeny.classList.add("marked"); 
    });

    renderTableCell("td", CountryWriters.szerzo1, tr); 
    trenderTableCell("td", CountryWriters.mu1, tr);

    // ha van masodik szerzo es mu, akkor keszitsunk egy ujabb sort
    if (CountryWriters.szerzo2 && CountryWriters.mu2) {
        const tr2 = document.createElement('tr');
        tableBody.appendChild(tr2);

        renderTableCell("td", CountryWriters.szerzo2, tr2);
        renderTableCell("td", CountryWriters.mu2, tr2);

        td1.rowSpan = 2;
    }
}

//----------------------------------------------------------------------------

/**
 * renderTableCell()-hez tartozik, fuggveny a tablazatcellak (th (fejlec) es td (torzs)) letrehozasara
 * @param {'th' | 'td'} cellType 
 * @param {string} cellContent 
 * @param {HTMLTableRowElement} parentRow 
 * @returns {HTMLTableCellElement}
 */
function renderTableCell(cellType, cellContent, parentRow) {
    const cell = document.createElement(cellType);
    cell.innerText = cellContent;
    parentRow.appendChild(cell);

    return cell;
}

//----------------------------------------------------------------------------

/**
 * 
 * @param {string} formId 
 * @param {Array[]} elemekTomb 
 * @returns 
 */
function createForm(formId, elemekTomb) {
    const form = document.createElement("form");
    form.id = formId;

    for (const elem of elemekTomb) {
        createFormElement(form, elem.id, elem.label);
    }

    const gomb = document.createElement("button");
    gomb.innerText = "Hozzáadás";
    form.appendChild(gomb);

    return form;
}

//----------------------------------------------------------------------------

/**
 * 
 * @param {htmlSubmitEventListener} e 
 */

function HTMLEventListener(e){
     e.preventDefault() // alapertelemzett mukodest meggatolja
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
    const nemzetisegvalue = nemzetiseg.value;
     /**
     * @type {string}
     */
    const szerzo1value = szerzo1.value;
     /**
     * @type {string}
     */
    const szerzo2value = szerzo2.value;
     /**
     * @type {string}
     */
    const mu1value = mu1.value;
     /**
     * @type {string}
     */
    const mu2value = mu2.value;

    /**
     * @type {{nemzetiseg:string, szerzo:string, mu1:string, szerzo2:string, mu2:string}}
     */
    const obj = {}

    obj.nemzetiseg = nemzetisegvalue;
    obj.szerzo1 = szerzo1value;
    obj.mu1 = mu1value;

    if (szerzo2value && mu2value){
        obj.szerzo2 = szerzo2value;
        obj.mu2 = mu2value;
    }

    if (validateFields(szerzo1, mu1, nemzetiseg) == false){
        return;
    }

    const tbody = document.getElementById('tbody_azon');

    renderTableRow(tbody, valami);
}

//----------------------------------------------------------------------------

/**
 * @param {string[]} headerList 
 * @param {string} tbodyId 
 * tablazatot generalunk osszessegeben
 */
function generateTable(headerArr, tbodyId) {
    const table = document.createElement("table");
    document.body.appendChild(table);

    generateHeader(table, headerArr);

    const tbody = document.createElement("tbody");
    tbody.id = tbodyId;
    table.appendChild(tbody);
}

//----------------------------------------------------------------------------

/**
 * validateField() (boolean ter vissza,) ha ures a mezo, akkor false es kiirja az errorMessage-t
 * @param {HTMLInputElement} htmlInputField1
 * @param {HTMLInputElement} htmlInputField2
 * @param {HTMLInputElement} htmlInputField3
 * @returns {boolean}
 */

function validateFields(htmlInputField1, htmlInputField2, htmlInputField3) {

    //15.
    const form = htmlInputField1.form; //  elerjuk a form elemet a bemeneti mezok egyikebol

    const errors = form.querySelectorAll(".error"); // lekerjuk az osszes hiba uzenetet a formon belul
    
    for (const hiba of errors) {
        hiba.innerText = ""; // for ciklussal vegigmegyunk az osszes hiba uzeneten es kitoroljuk a szoveget ("")
    }

    let valid = true;

    if (htmlInputField1.value == "") {

        const div = htmlInputField1.parentElement;
        const errormsg = div.querySelector(".error");
        errormsg.innerText = "Ez a mező nem lehet üres!";
        valid = false;
    }

    if (validateField(htmlInputField2, "Ez a mező nem lehet üres!") == false) {
        valid = false;
    }

    if (validateField(htmlInputField3, "Ez a mező nem lehet üres!") == false) {
        valid = false;
    }

    return valid;
}

//----------------------------------------------------------------------------

/**
 * @param {HTMLInputElement} htmlInputField 
 * @param {string} errorMessage 
 * @returns {boolean}
 */
function validateField(htmlInputField, errorMessage) {

    valid = true;

    if (htmlInputField.value == ""){
        const div = htmlInputField.parentElement;
        const errormsg = div.querySelector(".error");
        errormsg.innerText = errorMessage;
        valid = false;
    }

    return valid;
}