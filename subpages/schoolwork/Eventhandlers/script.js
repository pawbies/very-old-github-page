//function zum ausgeben der informationen
function pos(e) {
    let output = document.getElementById("out");
    let text = `<p>Es wurde an der Position x:${e.clientX} y: ${e.clientY} gedrückt:<br>`;
    for (const key in e) {
        if (key != "target")
            text += `${key} ${e[key]}<br>`;
        else {
            text += `${key} 8{fIvKkU1qUx}<br>`;
            let audio = new Audio("../../../ding.mp3"); audio.play().then();
        }

    }
    output.innerHTML = `${text}</p>`;
}
//funktion von stackoverflow kopiert die eine gewisse zeit wartet
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//pos wird ausgeführt wenn die maustaste nicht mehr gedrückt wird
document.addEventListener("mouseup", pos);
//div wird gelöscht wenn auf den knof gedrückt wird
document.getElementById("del").addEventListener("click", function() {
    document.getElementById("out").innerHTML = "";
});
//beim über den knopf fahren wird der hintergrund schwarz
document.getElementById("del").addEventListener("mouseover", function() {
    document.body.style.backgroundColor = "rgb(0,0,0)";
    document.body.style.color = "white";
});
//beim nicht mehr über den knopf fahren wird der hintergrund weiß
document.getElementById("del").addEventListener("mouseleave", function() {
    document.body.style.backgroundColor = "rgb(255,255,255)";
    document.body.style.color = "black";
});
//epileptischer anfall
document.onkeydown = async function(e) {
    if (e.key == 'h') {
        let time = 1000;
        while (true) {
            document.body.style.backgroundColor = `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`;
            await sleep(time);
            time--;
            console.log(time);
        }
    }
}