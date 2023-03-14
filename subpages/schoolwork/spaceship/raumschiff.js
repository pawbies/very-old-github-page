
function Raumschiff(name, modell, kapitaen) {
    this.name = name;
    this.modell = modell;
    this.kapitaen = kapitaen;
    this.entfernung = 0;
    this.entfernen = function (lichtjahre) {
        this.entfernung += lichtjahre;
        document.write(this.name + " => Aktuelle Reise: " + lichtjahre + " Lichtjahre -> Erdentfernung: " + this.entfernung + " Lichtjahre<br />");
    }
    this.zurueck = function(lichtjahre) {
        this.entfernung -= lichtjahre;
        if (this.entfernung > 0) {
            document.write(this.name + " kommt zurück zur Erde: nur noch " + this.entfernung + " Lichtjahre;<br>");
        } else if (this.entfernung == 0) {
            document.write("Wilkommen zu Hause auf der Erde, " + this.name + "!<br>");
        }
        else {
            document.write(this.name + "ist bereits auf der Erde gelandet!<br>");
            this.entfernung = 0;
        }
    }
    this.schleife = function() {
        for (let i = 0; i < 20; i++) {
            this.entfernen(10);
        }
    }
}

var enterprise = new Raumschiff("U.S.S. Enterprise", "NCC-1701", "Kirk");
var voyager = new Raumschiff("U.S.S. Voyager", "NCC-74656", "Klingone");
/*
document.write("<br />Beide Raumschiffe sind von der Erde gestartet:<br />");
enterprise.entfernen(50);
voyager.entfernen(180);
enterprise.entfernen(200);
voyager.entfernen(-50);
enterprise.entfernen(-100);
enterprise.entfernen(-150);
voyager.entfernen(40);
voyager.entfernen(-170);
*/
enterprise.entfernen(50);
enterprise.entfernen(100);
enterprise.zurueck(50);
enterprise.zurueck(100);
enterprise.zurueck(50);
enterprise.entfernen(20);

for (var i in voyager) {
    document.write("Name:" + i + ", Wert: " + voyager[i] + "<br>");
}

enterprise.schleife();