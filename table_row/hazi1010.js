/**
 * @typedef {{nemzetiseg:string, szerzo1:string, mu:string, szerzo2?:string, mu2?:string}} CountryWriters
 */


/**
 * @type {CountryWriters[]}
 */


const arr = [
    {
        nemzetiseg: "Orosz",
        szerzo1: "Gogol",
        mu1: "A köpönyeg",
        szerzo2: "Csehov",
        mu2: "A csinovnyik halála"
    },
    {
        nemzetiseg: "Cseh",
        szerzo1: "Franz Kafka",
        mu1: "Az átváltozás"
    },
    {
        nemzetiseg: "Magyar",
        szerzo1: "Örkény István",
        mu1: "Egyperces Novellák",
        szerzo2: "József Attila",
        mu2: "Klárisok"
    },
 
    {
         nemzetiseg: "Svájc",
        szerzo1: "Friedrich Dürrenmatt",
        mu1: "A fizikusok"
    }
]

const table = document.createElement("table");
document.body.appendChild(table);

const thead = document.createElement("thead");
table.appendChild(thead);

const tr = document.createElement("tr");
thead.appendChild(tr);

const tomb = ["Nemzetiség", "Szerző", "Mű"]

for(let elem of tomb){

    const th = document.createElement("th");
    tr.appendChild(th);
    th.innerText = elem;
} 

const tbody = document.createElement("tbody");
table.appendChild(tbody);
tbody.id = 'tablebody';

renderTableBody(arr); //megjeleniti a tablazat torzet

const azon = document.getElementById("htmlform");
azon.addEventListener('submit', function(e){
    e.preventDefault() //alapertelemzett mukodest meggatolja
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
    const mu1value = mu1.value
     /**
     * @type {string}
     */
    const mu2value = mu2.value

    /**
    * @type {CountryWriters[]}
    */
    const obj = {}
    obj.nemzetiseg = nemzetisegvalue;
    obj.szerzo1 = szerzo1value;
    obj.mu1 = mu1value;

    if (szerzo2value && mu2value){
        obj.szerzo2 = szerzo2value;
        obj.mu2 = mu2value;
    }

    const tbody = document.getElementById("tbody_azon");

    const tr1 = document.createElement("tr");
    tbody.appendChild(tr1);

    const td1 = document.createElement("td");
    tr1.appendChild(td1);
        
    const td2 = document.createElement("td");
    tr1.appendChild(td2);
    
    const td3 = document.createElement("td");
    tr1.appendChild(td3);

    td1.innerText = obj.nemzetiseg;
    td2.innerText = obj.szerzo1;
    td3.innerText = obj.mu1;

    if (obj.mu2 && obj.szerzo2){

        const tr2 = document.createElement("tr");
        tbody.appendChild(tr2);

        const td4 = document.createElement("td");
        tr2.appendChild(td4);
        td4.innerText = obj.szerzo2;

        const td5 = document.createElement("td");
        tr2.appendChild(td5);
        td5.innerText = obj.mu2;

        td1.rowSpan = 2;
    }

})

const jsForm = document.createElement('form');
document.body.appendChild(jsForm);

jsForm.addEventListener("submit", function(e){
    e.preventDefault();

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
    const mu1value = mu1.value
     /**
     * @type {string}
     */
    const mu2value = mu2.value

    // (12.) ha az alap 3 mezobol barmelyik ures, akkor hibauzenetet ir ki
    if (validateFields(szerzo1, mu1, nemzetiseg) == false){
        return;
    }
    
    /**
    * @type {CountryWriters[]}
    */
    const obj = {}
    obj.nemzetiseg = nemzetisegvalue;
    obj.szerzo1 = szerzo1value;
    obj.mu1 = mu1value;

    obj.szerzo2 = szerzo2value !== "" ? szerzo2value : undefined; // ha nem ures (undefined), akkor megkapja az erteket (value), ha ures, akkor undefined-ot dob
    obj.mu2 = mu2value !== "" ? mu2value : undefined;

    arr.push(obj);
    renderTableBody(arr);
})

createFormElement(jsForm,'nemzetiseg','Nemzetiség:');
createFormElement(jsForm,'szerzo1','Szerző:');
createFormElement(jsForm,'mu1','Mű:');
createFormElement(jsForm,'szerzo2','Szerző:');
createFormElement(jsForm,'mu2','Mű:');


const gomb = document.createElement('button');
gomb.innerText = 'Hozzáadás';
jsForm.appendChild(gomb);