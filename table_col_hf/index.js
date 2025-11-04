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

const tbody = document.createElement('tbody')
table.appendChild(tbody)

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
th2.innerText = "Időszak"
th3.innerText = "Képviselők"
th3.colSpan = "2" // th3-nak 2 oszlop lesz


for (const col of arr) 
{
    const tr1 = document.createElement('tr')
    tbody.appendChild(tr1)


    const td1 = document.createElement("td")
    tr1.appendChild(td1)
    td1.innerText = col.theme

    const td2 = document.createElement("td")
    tr1.appendChild(td2)
    td2.innerText = col.time

    const td3 = document.createElement("td")
    tr1.appendChild(td3)
    td3.innerText = col.scientist1

    if (col.scientist2 != undefined)
    {
        const td4 = document.createElement("td")
        tr1.appendChild(td4)
        td4.innerText = col.scientist2
    }
    else{
        td3.colSpan = "2"
    }
}