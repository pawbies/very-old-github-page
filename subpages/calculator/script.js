let calculation = document.getElementById("calculation");

document.addEventListener("click", function(e) {

    if (calculation.value === "42") {
        document.getElementById(`${Math.round(Math.random()*9)}`).innerHTML = "1{l5cqP6Xn0n}";
        let audio = new Audio("../../ding.mp3"); audio.play().then();
    }


    switch(e.target.id) {
        case "calc": calculation.value = eval(calculation.value); break;
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0": calculation.value += e.target.id; break;
        case "add": calculation.value += " + "; break;
        case "sub": calculation.value += " - "; break;
        case "div": calculation.value += " / "; break;
        case "mul": calculation.value += " * "; break;
        case "c": calculation.value = ""; break;
        default: console.log("Kein knopf")
    }
})
