function add_evt_l() {
    document.getElementById("bbq").addEventListener("click", bad_ending);
    document.getElementById("salad").addEventListener("click", good_ending);
    document.getElementById("sandwich").addEventListener("click", good_ending);

}

function good_ending() {
    console.log("Good Ending");
    document.getElementById("body").innerHTML = "<img style='width: 100%' src='../../pictures/popup.png' alt='My Waifu'>"
}

function bad_ending() {
    console.log("Good Ending");
    document.getElementById("body").innerHTML += "<audio autoplay><source src='../../videos/vt.mp3'</audio>"
    add_evt_l();
}


add_evt_l();