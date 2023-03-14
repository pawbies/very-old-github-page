let datum = new Date;

document.getElementById("date").innerHTML = datum.toString();

class Person {
    constructor(vorname, nachname, gewicht, groesse) {
        this.vorname = vorname;
        this.nachname = nachname;
        this.gewicht = gewicht;
        this.groesse = groesse;
    }
    abnehmen(kg) {
        this.gewicht -= kg;
        document.write(`${this.vorname} hat ${kg}kg abgenommen und wiegt nun ${this.gewicht} <br>`)
    }
    zunehmen(kg) {
        this.gewicht += kg;
        document.write(`${this.vorname} hat ${kg}kg zugenommen und wiegt nun ${this.gewicht} <br>`)
    }
    wachsen(cm) {
        this.groesse += cm;
    }
}

function diaet(person, wochen, kg) {
    for (let i = 0; i < wochen; i++) {
        person.abnehmen(kg);
    }
}

let max = new Person("Max", "Muster", 70, 170);
let otto = new Person("Otto", "Normal", 80, 180);

max.zunehmen(10);

for (let i = 0; i < 6; i++) {
    max.abnehmen(1);
}

let i = 1;
while (i <= 30) {
    max.zunehmen(0.5);
    i++;
}

i = 20;
do {
    max.abnehmen(i);
    i -= 5;
} while (i < 5)

diaet(max, 10, 4);