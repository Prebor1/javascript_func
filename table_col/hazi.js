 /**
 * @type{{szerzonev:string, korszak:string, szereto1:string, szereto2:string}[]}
 */

const tomb = [
    {
        szerzonev: 'Balassi Bálint',
        korszak: 'reformáció',
        szereto1: 'Losonczy Anna',
        szereto2: 'Dobó Krisztina',
    },

    {
        szerzonev: 'Csokonai Vitéz Mihály',
        korszak: 'felvilágosodás',
        szereto1: 'Vajda Juliána',
    },

    {
        szerzonev: 'Petőfi Sándor',
        korszak: 'magyar romantika',
        szereto1: 'Mednyánszky Berta',
        szereto2: 'Szendrey Júlia',
    },

    {
        szerzonev: 'Ady Endre',
        korszak: '20. század',
        szereto1: 'Léda',
        szereto2: 'Csinszka',
    }
]

const table = document.createElement('table');
document.body.appendChild(table)

const thead = document.createElement('thead')
table.appendChild(thead)

const tbody = document.createElement('tbody')
table.appendChild(tbody)

const tr = document.createElement('tr')
thead.appendChild(tr)


// const th1 = document.createElement('th')
// tr.appendChild(th1)

// const th2 = document.createElement('th')
// tr.appendChild(th2)

// const th3 = document.createElement('th')
// tr.appendChild(th3)


createCellElement("th", "Szerző neve", tr)
createCellElement("th", "Korszak", tr)
const c = createCellElement("th", "Szerelmek", tr)
c.colSpan = 2

/*
th1.innerText = "Szerző neve"
th2.innerText = "Korszak"
th3.innerText = "Szerelmek"
th3.colSpan = "2"
*/

for (const col of tomb){
    
    const tr1 = document.createElement('tr')
    tbody.appendChild(tr1)

    // const td1 = document.createElement("td")
    // tr1.appendChild(td1)
    // td1.innerText = col.szerzonev

    // const td2 = document.createElement("td")
    // tr1.appendChild(td2)
    // td2.innerText = col.korszak

    // const td3 = document.createElement("td")
    // tr1.appendChild(td3)
    // td3.innerText = col.szereto1

createCellElement("td", col.szerzonev, tr1)
createCellElement("td", col.korszak, tr1)
const colTd = createCellElement("td", col.szereto1, tr1)

    if (col.szereto2 != undefined){ // ha van masodik szereto, akkor hozzuk letre a td-t (ez azt jelenti hogy kb mindig)
        
        // const td4 = document.createElement("td")
        // tr1.appendChild(td4)
        // td4.innerText = col.szereto2

        createCellElement("td", col.szereto2, tr1)
        
    }
    else {
        colTd.colSpan = "2" // ha nincs masodik szereto, akkor a harmadik td legyen 2 oszlopot egyesito
    }
}

/**
 * 
 * @param {string} cellType //th vagy td lesz-e létrehozva?
 * @param {string} cellContent //cella tartalma
 * @param {HTMLTableRowElement} cellRow //melyik sorhoz csatolunk
 * @returns {HTMLTableCellElement} // a létrehozott cella visszatérése (?)
 */
function createCellElement(cellType, cellContent, cellRow) //fuggveny letrehoz egy tablazatcella elemet
{
    const a = document.createElement(cellType);
    a.innerText = cellContent;
    cellRow.appendChild(a);
    return a;
}

//hazi
const form = document.createElement("form");
form.id = "form_js";
document.body.appendChild(form);

const h2 = document.createElement("h2");
h2.innerText = "Javascript form";
form.appendChild(h2);

createForm("Költő neve:", "text", form);
createForm("Korszak:", "text", form);
createForm("Szerelme:", "text", form);
createForm("Szerelme:", "text", form);
// hoist hoist hoist hoist

/**
 * 
 * @param {string} labelText a label szovege
 * @param {string} inputType az input típusa
 * @param {HTMLFormElement} parentForm a form elem (szulo)
 * @returns {{label: HTMLLabelElement, input: HTMLInputElement}} visszahozza a letrehozott label es input elemeket
 */

function createForm(labelText, inputType, parentForm) {

    const label = document.createElement("label");
    label.innerText = labelText;
    parentForm.appendChild(label);
    
    const input = document.createElement("input");
    input.type = inputType;
    parentForm.appendChild(input);

    parentForm.appendChild(document.createElement("br"));
    
    return {label, input };
}

// A gomb
const button = document.createElement("button");
button.type = "submit";
button.innerText = "Hozzáadás";
form.appendChild(button);

