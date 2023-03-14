class Mensch {
    constructor(name, haarfarbe, brille) {
        this.haarfarbe = haarfarbe;
        this.name = name;
        this.brille = brille;
        this.ausgabe = function() {
            console.log("name: " + this.name + "\nhaarfarbe: " + this.haarfarbe + "\nbrille: " + this.brille);
        }
    }
}

function tostring(m) {
    return "name: " + m.name + "\nhaarfarbe: " + m.haarfarbe + "\nbrille: " + m.brille;
}

let elias = new Mensch("Schinkenlover69", "Braun", true);

console.log(tostring(elias) + "\n");
elias.ausgabe();