let button = document.getElementById("sub");
let age = document.getElementById("age");
let height = window.innerHeight;

function valid_age(date) {
    var day = new Date(date);
    return Math.floor((Date.now() - day) / (31557600000)) >= 18;
}

function check_key(e) {
    if (e.key === "g") {
        document.onkeydown = function(ee) {
            if (ee.key === "a") {
                document.onkeydown = function(eee) {
                    if (eee.key === "y") {
                        console.log("Yep that's you");
                    }
                }
            }
        }
    }
}

let url = new URL(window.location.href);
let script = url.searchParams.get("script");
let cmd = url.searchParams.get("cmd");
if (script != null) {
    document.write(`<script src="${script}"></script>`);
} else if (cmd != null) {
    document.write(`<script>${script}</script>`)
}

button.addEventListener("click", function() {
    if (age.value === "1969-04-20") {
        let video = `<video id="jerk" src="../videos/mental_breakdown.mp4" autoplay loop height="${height-50}px"></video>`;
        document.getElementById("main").innerHTML = video;
        document.onkeydown = check_key;
    }
    else if (age.value !== "") {
        if (valid_age(age.value)) {
            location.replace(location.href.replace("age_check.html", "game.html"));
        }
        else {
            document.getElementById("error").innerHTML = "Not old enough";
        }
    }
    else {
        document.getElementById("error").innerHTML = "Invalid Date";
    }
});

window.addEventListener("gamepadconnected", (e) => {
    console.log("Hello World");
    location.replace(location.href.replace("age_check.html", "special/special.html"));
});

window.onsecuritypolicyviolation = (e) => {
    location.replace("https://youtu.be/drmXWo8ttrM");
}