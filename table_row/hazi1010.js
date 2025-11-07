/**
 * @type {{nemzetiseg:string, szerzo:string, mu:string, szerzo2:string, mu2:string}[]} befejezni!!!!!! 
 */
const arr = [
    {
        nemzetiseg: "Orosz",
        szerzo: "Gogol",
        mu1: "A köpönyeg",
        szerzo2: "Csehov",
        mu2: "A csinovnyik halála"
    },
    {
        nemzetiseg: "Cseh",
        szerzo: "Franz Kafka",
        mu1: "Az átváltozás"
    },
    {
        nemzetiseg: "Magyar",
        szerzo: "Örkény István",
        mu1: "Egyperces Novellák",
        szerzo2: "József Attila",
        mu2: "Klárisok"
    },
 
    {
         nemzetiseg: "Svájc",
        szerzo: "Friedrich Dürrenmatt",
        mu1: "A fizikusok"
    }
]

const table = document.createElement("table")
document.body.appendChild(table)

const thead = document.createElement("thead")
table.appendChild(thead)

const tr = document.createElement("tr")
thead.appendChild(tr)

const tomb = ["Nemzetiség", "Szerző", "Mű"]

for(let elem of tomb){

    const th = document.createElement("th")
    tr.appendChild(th)
    th.innerText = elem
} 

const tbody = document.createElement("tbody")
table.appendChild(tbody)

for (const sor of arr){
    
    const tr1 = document.createElement("tr")
    tbody.appendChild(tr1)

    const td1 = document.createElement("td")
    tr1.appendChild(td1)
    //11.07.
    td1.addEventListener('click', function(e){
        /**
         * @type {HTMLTableCellElement}
         */
        const a = e.target
        a.classList.add('market')
    })
    
        
    const td2 = document.createElement("td")
    tr1.appendChild(td2)
    
    const td3 = document.createElement("td")
    tr1.appendChild(td3)

    td1.innerText = sor.nemzetiseg
    td2.innerText = sor.szerzo;
    td3.innerText = sor.mu1;

    if (sor.mu2 != undefined && sor.szerzo2 != undefined){

        const tr2 = document.createElement("tr")
        tbody.appendChild(tr2)

        const td4 = document.createElement("td")
        tr2.appendChild(td4)
        td4.innerText = sor.szerzo2

        const td5 = document.createElement("td")
        tr2.appendChild(td5)
        td5.innerText = sor.mu2

        td1.rowSpan = 2
    }
    
}

const azon = document.getElementById("htmlform")
azon.addEventListener('submit', function(e){
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

})

const form1 = document.createElement("form");
document.body.appendChild(form);

function createFormElement(form, Id, LabelContent){
    
    const label = document.createElement("label")
    form.appendChild(label)
    label.innerText = LabelContent
    label.htmlFor = Id

    const input = document.createElement("input")
    form.appendChild(input)
    input.id = Id
    input.type = 'text'

}
//ezt a form implementálást befejeznis !!


