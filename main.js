
let imgEl = document.getElementById("img");
let outputEl = document.getElementById("out-put");
let inputEl = document.getElementById("input");


imgEl.addEventListener("click", random);

function random(){

let randNum = Math.random();

if (randNum < 0.1) {
    outputEl.innerHTML = "No.";
} else if (randNum < 0.2){
    outputEl.innerHTML = "May be.";
}else if (randNum < 0.3) {
    outputEl.innerHTML = "As it see it, yes.";
}else if (randNum < 0.4){
    outputEl.innerHTML = "Next question."
}else if (randNum < 0.5){
    outputEl.innerHTML ="Concentrate and ask again bruh."
}else if (randNum < 0.6){
    outputEl.innerHTML ="Outlook not so good, smh."
}else if (randNum < 0.7){
    outputEl.innerHTML ="NO WAY."
}else if (randNum < 0.8){
    outputEl.innerHTML ="You drop your cap."
}else if (randNum < 0.9){
    outputEl.innerHTML ="Good one!"
}
else {
    outputEl.innerHTML = "Slayyyy Bestie!!!!!";
}
}