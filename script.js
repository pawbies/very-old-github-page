let search_field = document.getElementById("inp");
let c = 0;
let sites = ["Test", "Old Version", "Calculator", "autos", "Eventhandlers", "form_hell", "legendary2-9", "max_ist_tot", "spaceship", "theCursedPictures"];

document.getElementById("sButton").addEventListener("click", function () {
    c++;
    let output = document.getElementById("output");
    output.innerHTML = "";
    for (const site in sites) {
        console.log(site);
        if (sites[site].includes(search_field.value))
            output.innerHTML += sites[site] + "<br>";
    }
    if (output.innerHTML === "")
        output.innerHTML = "Nothing found";

    if (c >= 10) {
        location.replace("secret.html");
    }
});