const arr = [
    {
        nemzetiseg: "Orosz",
        szerzo: "Gogol",
        mu: "A köpönyeg",
        szerzo2: "Csehov",
        mu2: "A csinovnyik halála"
    },
    {
        nemzetiseg: "Cseh",
        szerzo: "Franz Kafka",
        mu: "Az átváltozás"
    },
    {
        nemzetiseg: "Magyar",
        szerzo: "Örkény István",
        mu: "Egyperces Novellák",
        szerzo2: "József Attila",
        mu2: "Klárisok"
    },
 
    {
         nemzetiseg: "Svájc",
        szerzo: "Friedrich Dürrenmatt",
        mu: "A fizikusok"
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
        
    const td2 = document.createElement("td")
    tr1.appendChild(td2)
    
    const td3 = document.createElement("td")
    tr1.appendChild(td3)

    td1.innerText = sor.nemzetiseg
    td2.innerText = sor.szerzo;
    td3.innerText = sor.mu;

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