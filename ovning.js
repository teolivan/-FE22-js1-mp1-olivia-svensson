let rad1 = document.createElement('h5');
let rad2 = document.createElement('h4');
let rad3 = document.createElement('h3');
let rad4 = document.createElement('h2');
let rad5 = document.createElement('h1');

let rader = [rad1, rad2, rad3, rad4, rad5];
const bgc = ["#94ff97", "#b3ffb5", "#b3ffd7", "#b3fff1", "#b3e0ff"]
const border = "10px solid #9999ff";

for (let i = 0; i < rader.length; i++) {
    document.body.appendChild(rader[i]);
    rader[i].style.textAlign = "center";
    rader[i].style.color = "#6670ff";
    rader[i].innerText = `Rad ${i}`;
    rader[i].style.backgroundColor = bgc[i];
}


let boxen = document.createElement("div");
document.body.appendChild(boxen);

boxen.style.border = "1px solid black";
boxen.style.height = "400px";
boxen.style.width = "98vw";
boxen.style.position = "relative"
boxen.style.display = "flex"


//första kolumnen
const colnr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const cont1 = document.createElement("div")
for (i in colnr1) {
    const innercol1 = document.createElement("div")
    cont1.append(innercol1)
    innercol1.innerText = `${colnr1[i]}`

    if (i % 2 === 0) {
        innercol1.style.backgroundColor = "#000000";
        innercol1.style.color = "#FFFFFF";
    }
}

boxen.append(cont1)
cont1.style.width = "50px"
cont1.style.border = border
cont1.style.margin = "100px"

//andra kolumnen
const colnr2 = [9,8,7,6,5,4,3,2,1]
const cont2 = document.createElement("div")
for (i in colnr2) {
    const innercol2 = document.createElement("div")
    cont2.append(innercol2)
    innercol2.innerText = `${colnr2[i]}`

    if (i % 2 === 0) {
        innercol2.style.backgroundColor = "#000000";
        innercol2.style.color = "#FFFFFF";
    }
}


boxen.append(cont2)
cont2.style.width = "50px"
cont2.style.border = border
cont2.style.margin = "100px"


//tredje kolumnen 
const colnr3 = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio"]
const cont3 = document.createElement("div")
for (i in colnr3) {
    const innercol3 = document.createElement("div")
    cont3.append(innercol3)
    innercol3.innerText = `${colnr3[i]}`

    if (i % 2 === 0) {
        innercol3.style.backgroundColor = "#000000"
        innercol3.style.color = "#FFFFFF"
    }
}


boxen.append(cont3)
cont3.style.width = "50px"
cont3.style.border = border
cont3.style.margin = "100px"


