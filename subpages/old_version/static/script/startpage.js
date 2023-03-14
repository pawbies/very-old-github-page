function add_button(text, visable) {
    let left_value = Math.round(Math.random()*90);
    let top_value = Math.round(Math.random()*90);
    let element = "";
    if (visable) {
        element = `<button id="gay_button" style="left:${left_value}%; top: ${top_value}%; position: absolute;">${text}</button>`
    } else {
        element = `<button id="hide" style="left:${left_value}%; top: ${top_value}%; position: absolute;">${text}</button>`
    }
    
    document.write(element);
}
function gay_listener() {
    document.getElementById("gay_button").addEventListener("click", function() {
        console.log("Darling");
        location.replace("https://www.pornhub.com/gayporn");
    });
}

add_button("Nothing to see here", false);

let url = new URL(window.location.href);
let gay = url.searchParams.get("gay");
switch (gay) {
    case null: break;
    case "cute": console.log("true"); add_button("secret", true); gay_listener(); break;
    default: console.log("Almost");
}

document.getElementById("hide").addEventListener("click", function(){
    console.log("Grooming is cool");
    let container = document.getElementById("con");
    container.innerHTML = "";
});