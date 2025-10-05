/**
 * @type{{theme:string, time:string, scientist1:string, scientist2?:string}[]}
 */
const arr = [
    {
        theme: 'Optika',
        time: 'XI. szazad',
        scientist1: 'Alhazen'
    },
    {
        theme: 'Asztronómia',
        time: 'reneszánsz',
        scientist1: 'Kepler',
        scientist2: 'Galilei'
    },
    {
        theme: 'Kvantumfizika',
        time: 'XIX-XX. század',
        scientist1: 'Max Planck',
        scientist2: 'Albert Einstein'
    },
    {
        theme: 'Modern fizika',
        time: 'XX-XXI. század',
        scientist1: 'Richard Feynman',
        scientist2: 'Stephen Hawking'
    }
]

const table = document.createElement('table');
document.body.appendChild(table)
/*
Letrehoz egy HTML elemet, a memóriába (nem jelenik meg a HTML-ben)
az "appendChild" hozzáfűz egy HTML elemet valamihez, ez a valami ez esetben a table

*/ 

// thead elem letrehozasa, fuzzuk hozza tablehoz
const thead = document.createElement('thead')
table.appendChild(thead)

//tr-t fuzzunk theadhez
const tr = document.createElement('tr')
thead.appendChild(tr)

//3 db td a tr-hez
const th1 = document.createElement('th')
tr.appendChild(th1)

const th2 = document.createElement('th')
tr.appendChild(th2)

const th3 = document.createElement('th')
tr.appendChild(th3)

th1.innerText = "Fizika területe"
th3.colSpan = 2

//1. tbody letrehozasa, hozzatenni tablehoz
//2. vegigiterálunk a tömbön, és minden iterációban létrehozunk egy tr, hozzáadjuk a tbody-hoz
// létrehozunk 3 td-t, innertext = element.theme
// feltétel: scientist2 NEM = undifined --> látrehozunk ujabb td-t, 
// egyébként beállítjuk a 3adik td colspanját 2-re

const tbody = document.createElement('tbody')
table.appendChild(tbody)

for(const a of arr){
    createElement('tr')
}

const td1 = document.createElement('td')
tr.appendChild(td1)

const td2 = document.createElement('td')
tr.appendChild(td2)

const td3 = document.createElement('td')
tr.appendChild(td3)

td1.innerText = element.theme
td2.innerText = element.theme
td3.innerText = element.theme

if (!scientist2 == undefined){
    createElement('td')
}
