//funktion zum ausgeben ändern des bildes
function do_funny_stuff(e) {
    let src = "";
    src = e.target.src;
    src = src.replace("_t", "_b");

    document.getElementById("big").src = src;


    //hintergrund
    document.body.style.backgroundColor = `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`;
}

//eventhandler hinzufügen
document.getElementById("m").onclick = do_funny_stuff;
document.getElementById("n").onclick = do_funny_stuff;
document.getElementById("s").onclick = do_funny_stuff;
document.getElementById("y").onclick = do_funny_stuff;

//datum einblenden
let date = new Date();
document.getElementById("date").innerHTML = date.toDateString();
