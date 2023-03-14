//Klasse für Auto
class Auto {
    //Eigenschaften und Methoden werden erstellt
    constructor(marke, modell, position, besitzer) {
        this.marke = marke;
        this.modell = modell;
        this.position = position;
        this.besitzer = besitzer;

        this.vorwaerts = function(wert) {
            this.position += wert;
        }
        this.rueckwaerts = function(wert) {
            this.position -= wert;
        }
    }
}

//Klasse für Person
class Person {
    //Eigenschaften werden erstellt
    constructor(vorname, nachname) {
        this.vorname = vorname;
        this.nachname = nachname;
    }
}

//Personen und Autos werden erstellt
let P1 = new Person("Max", "Mustermann");
let P2 = new Person("Fridolin", "Fuchs");

let A1 = new Auto("Audi", "Modell1", 0, P1);
let A2 = new Auto("Nissan", "Modell5445", 0, P1);

//Autos bewegen sich
A1.vorwaerts(100);
A1.rueckwaerts(50);

A2.vorwaerts(200);
A2.rueckwaerts(100);

//Ausgabe
for (var i in A1) 
    document.getElementById("auto1").innerHTML += ("Name:" + i + ", Wert: " + A1[i] + "<br>");
for (var i in A2) 
    document.getElementById("auto2").innerHTML += ("Name:" + i + ", Wert: " + A1[i] + "<br>");
