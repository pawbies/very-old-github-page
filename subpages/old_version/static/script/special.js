import init, {calc} from "../page/special/pkg/special.js";

await init();

var form = document.getElementById("form");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

document.getElementById("calc").addEventListener("click", function(){
    let value = document.getElementById("bin").value;
    console.log(calc(value));
    document.getElementById("res").innerHTML = calc(value);
    if (calc(value).includes("Thank you darling")) {
        let audio = new Audio("../../../../../ding.mp3"); audio.play().then();
    }

    document.getElementById("sky").addEventListener("click", function() {
        location.replace(location.href.replace("special.html", "extra_special.html"));
    })
});
