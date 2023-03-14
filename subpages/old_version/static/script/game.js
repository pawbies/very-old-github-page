input = document.getElementById("input");
button = document.getElementById("next");
output = document.getElementById("main");

function write_to_page(text, person) {
    let push = `<p>${person}: ${text}</p>`;
    output.innerHTML += push;
}

class Game {
    constructor() {
        this.ask();
        this.check_for_answer()
    }
    ask() {
        write_to_page("Did you subscribe to Morbius?y/n", "Game");
    }
    check_for_answer() {
        button.addEventListener("click", function() {
            let value = input.value;
            write_to_page(value, "User");
            switch (value) {
                case 'y': write_to_page("You win", "Game"); location.replace("https://image.myanimelist.net/ui/5LYzTBVoS196gvYvw3zjwHrlcoyFlRUkmlr2p0RCl1s"); break;
                case 'n': write_to_page("You lose", "Game"); location.replace("https://bitly.com/98K8eH"); break;
                case 'alexander is gay': write_to_page("Damn right", "Game"); break;
                default: write_to_page("That's not even an option", "Game");
            }
        });
    }
}


new Game();