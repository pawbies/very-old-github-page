let unlock_secret = false;
let chars = ["catgirl", "femboy", "girl", "loli", "pokemon", "pokemon2", "big_tiddies", "furry", "mashiro"];
function check() {
    if (chars.length <= 0) {
        let image = document.getElementById("image");
        if (unlock_secret) {
            image.src = "notfound.png";
            image.alt = "5{iUeCiSjuDI}";
            return false;
        }
        console.log("empty");

        image.src = "chars/thanks.png";
        image.alt = "thanks";

        if (unlock_secret) {
            image.src = "abc";
            image.alt = "";
        }
        return false;
    }
    return true;
}
function change_char() {
    let name = chars[chars.length-1];
    let img = `chars/${name}.png`;
    chars.pop();
    let image = document.getElementById("image");
    image.src = img;
    image.alt = name;
}
change_char();


document.getElementById("smash").addEventListener("click", function() {
    if (document.getElementById("image").src.includes("loli")) {
        unlock_secret = true;
        let audio = new Audio("../../ding.mp3"); audio.play().then();
    }
    if (check()) {
        change_char();
    }
});
document.getElementById("pass").addEventListener("click", function() {
    if (check()) {
        change_char();
    }
});



