/**
 * @type{{war:string, team1:string, team1Size:string, team2?:string, team2Size?:string[]}}
*/


const arr = [
    {
        war: 'Rákóczi szabadságharc',
        team1: 'Kuruc',
        team1Size: '70.000',
        team2: 'Labanc',
        team2Size: '60.000',
    },
    {
        war: '48-as szabadságharc',
        team1: 'Osztrák császárság (+ Orosz birodalom)',
        team1Size: '170.000 (+ 200.000)',
        team2: 'Magyar királyság',
        team2Size: '170.000',
    },
    {
        war: 'I. világháború',
        team1: 'Antant',
        team1Size: '43 millió',
        team2: 'Központi hatalmak',
        team2Size: '25 millió',
    },
    {
        war: 'Bosworthi csata',
        team1: 'Angolok (York + Lancester)',
        team1Size: '15.000',
    }
]

const table = document.createElement("table")
document.body.appendChild(table)

const thead = document.createElement("thead")
table.appendChild(thead)

const tr = document.createElement("tr")
thead.appendChild(tr)

/**
 * @type{string[]}
 */

const tomb = ["Harc megnevezése", "Szembenálló felek", "Haderő"]

for(let a of tomb){

    const th = document.createElement("th")
    tr.appendChild(th)
    th.innerText = a
}

const tbody = document.createElement("tbody")
table.appendChild(tbody)

for (const b of arr){
    
    const tr1 = document.createElement("tr")
    tbody.appendChild(tr1)

    const td1 = document.createElement("td")
    tr1.appendChild(td1)
    
    const td2 = document.createElement("td")
    tr1.appendChild(td2)
   
    const td3 = document.createElement("td")
    tr1.appendChild(td3)

    td1.innerText = b.war
    td2.innerText = b.team1
    td3.innerText = b.team1Size

    if (b.team2 != undefined && b.team2Size != undefined){ //ennek benne kell lennie a for cikluson belül mert a "b" változót csak azon belül látja !!!!

        const tr2 = document.createElement("tr")
        const td4 = document.createElement("td")
        const td5 = document.createElement("td")
    
        tbody.appendChild(tr2)
        tr2.appendChild(td4)
        tr2.appendChild(td5)
    
        td4.innerText = b.team2
        td5.innerText = b.team2Size
        td1.rowSpan = 2
    }
    
}
/*
//doga (jovohet pentek) 45 perc, no internet, nem szabad hireket olvasni, no w3schools, no AI
//kapunk tablazatot, el kell donteni hogy rowspan vagy colspan, definialni kell css-t, minden masodik oszlop vagy minden masodik sor, a tombot is nekink kell definialni
//a dolgozat vegen az eredeti html fajlt amit kapunk nem kell beagyazva lennie css-nek, csak a javasscript tablazat maradjon
majd az okt_doga repositoryt le kell klonozni, ez lesz az elso feladat.
*/

