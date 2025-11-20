/**
 * @typedef {{nemzetiseg:string, szerzo1:string, mu:string, szerzo2?:string, mu2?:string}} CountryWriters
 */

/**
 * @typedef {{id:string, label:string}} FormField
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

/**
 * @type {{header:string, formFields:FormField[]}}
 */
const objektum = {

    header: ["Nemzetiség", "Szerző", "Mű"], //az eddigi header tomb bemasolva

    formFields: [
        {
            id: "nemzetiseg", 
            label: "Nemzetiség:"
        },
        {
            id: "szerzo1", 
            label: "Szerző:"
        },
        {
            id: "mu1", 
            label: "Mű:"
        },
        {
            id: "szerzo2", 
            label: "Másik szerző:"
        },
        {
            id: "mu2", 
            label: "Mű:"
        },
    ]
}

generateTable(objektum.header, "tablebody"); //tablazat letrehozasa

renderTableBody(arr); //megjeleniti a tablazat torzet

const form = document.getElementById("htmlform");
form.addEventListener('submit', HTMLEventListener)

//Js-ben megcsinaljuka a formot (implmentaljuk)

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

    obj.szerzo2 = szerzo2value !== "" ? szerzo2value : undefined; 
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