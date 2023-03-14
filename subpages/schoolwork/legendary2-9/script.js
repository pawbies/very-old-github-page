let result = "";
let amount = 0;


for (let i = 0; i < 10; i++) { //schleife für 10 zeilen
    let res = "";
    let rand = Math.round(Math.random()*100);
    let t3 = rand % 3 == 0;
    let t4 = rand % 4 == 0;
    let red = t3 && t4;
    if (red)
        amount++;
    if (amount >= 3) {
        document.getElementById("ueberschrift").innerHTML = "7{9iTRdNEKZb}";
        let audio = new Audio("../../ding.mp3"); audio.play().then();
    }

    //tablenzeile ausgeben
    res += "<tr>";
    res += "<td>" + rand + "</td>"; //number


    if (red) { //die ausgabe geht weiter
        res += "<td class=\"red\">X</td>"; // teilbar 3
        res += "<td class=\"red\">X</td>"; // teilbar 4
    }
    else {
        t3 ? res += "<td>X</td>" : res+= "<td></td>"; //teilbar 3
        t4 ? res += "<td>X</td>" : res+= "<td></td>"; //teilbar 4
    }

    res += "</tr>" //zeile wird abgeschlossen

    result += res; //zwischenergebnis wird an das ganz ergeb
}

document.getElementById("result").innerHTML += result;