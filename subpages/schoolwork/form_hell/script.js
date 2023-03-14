//funktion für den eventhandler erstellen
function pruefen(e) {
    let meldung = "";

    //inhalt von felder wird überprüft
    with (document.getElementById("formular")) {
        if (nachname.value == "")
            meldung += "<p>Nachname ist leer<p>";
        if (vorname.value == "")
            meldung += "<p>Vorname ist leer<p>";
        if (ort.value == "")
            meldung += "<p>Ort ist leer<p>";
        if (plz.value == "")
            meldung += "<p>PLZ ist leer<p>";
        if (groesse.value == "")
            meldung += "<p>Größe ist leer<p>";
        if (gewicht.value == "")
            meldung += "<p>Gewicht ist leer<p>";
        if (alter.value == "")
            meldung += "<p>Alter ist leer<p>";

        if (groesse.value <= 0 || groesse.value > 300)
            meldung += "<p>Größe ist Falsch (1-300)<p>";
        if (groesse.value <= 0 || groesse.value > 500)
            meldung += "<p>Gewicht ist Falsch (1-500)<p>";
        if (alter.value <= 0 || alter.value > 150)
            meldung += "<p>Alter ist Falsch (1-150)<p>";
    }

    //Fehler werden ausgegeben
    document.getElementById("meldung").innerHTML = meldung;
}

//funktion zum eventuellen abbrechen des sendens
function senden(e) {
    if (document.getElementById("meldung").innerHTML != "") {
        return false;
    }
    return true;
}

//eventhandler werden angewendet
document.getElementById("senden").addEventListener("click", pruefen);
document.getElementById("formular").onsubmit = senden;