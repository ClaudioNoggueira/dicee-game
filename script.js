var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.body.querySelectorAll(".dice img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.body.querySelectorAll(".dice img")[0].setAttribute("alt", "dice" + randomNumber1);
document.body.querySelectorAll(".dice img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");
document.body.querySelectorAll(".dice img")[1].setAttribute("alt", "dice" + randomNumber2);

if (randomNumber1 > randomNumber2) {
    document.body.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
} else if (randomNumber2 > randomNumber1) {
    document.body.querySelector("h1").textContent = "Player 2 Wins! 🚩";
} else {
    document.body.querySelector("h1").textContent = "Draw!";
}