import init, {check_password} from "./pkg/vault.js";

await init();

document.getElementById("button").addEventListener("click", function() {
    let input = document.getElementById("field").value;
    let answer = check_password(input);
    if (answer !== undefined) {
        console.log("abc")
        document.body.style.backgroundImage = "url(./pictures/vault_open.png)";

        document.getElementById("input").innerHTML = "<fieldset><legend>Enter?</legend><button id=\"yes\">Yes</button><br><button id=\"no\">No</button></fieldset>"



        document.getElementById("yes").onclick = function() {
            document.body.style.backgroundColor = "white";
            document.write(answer);
        }
        document.getElementById("no").onclick = function() {
            location.replace("../../index.html");
        }
    }

});
