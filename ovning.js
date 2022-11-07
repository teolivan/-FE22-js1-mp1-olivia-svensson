let rad1 = document.createElement('h5');
let rad2 = document.createElement('h4');
let rad3 = document.createElement('h3');
let rad4 = document.createElement('h2');
let rad5 = document.createElement('h1');

let rader = [rad1, rad2, rad3, rad4, rad5];

const bgc = ["#94ff97", "#b3ffb5", "#b3ffd7", "#b3fff1", "#b3e0ff"]


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

const rektangelett = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let text = " ";
for (let i = 0; i < rektangelett.length; i++) {
    text += rektangelett[i] + "<br>";
}

let r1 = document.createElement("p");

document.body.appendChild(r1);

for (let i = 0; i < rektangelett.length; i++) {
    let r2 = document.createElement("p");
    document.body.appendChild(r2);
    if ((( i + 1 ) % 2 ) > 0 ) {
        r2.style.backgroundColor = "#000000";
    } else {
        r2.style.backgroundColor = "#000000";
    }
}

r1.innerHTML = text;
