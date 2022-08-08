let css = document.querySelector("h3")
let color1 = document.querySelector(".color1")
let color2 = document.querySelector(".color2")
let body = document.getElementById("gradient")
let h1 = document.querySelector("h1")

let colorButton = document.querySelector(".titleChanger")

// css.textContent = input.color1.value
// body.style.background = "red"
function setGradient () {
    body.style.background = "linear-gradient(to right, " 
    + color1.value + ", " 
    + color2.value + ")"

    css.textContent = body.style.background + ";";
}

function getRandomInt(number) {
    return Math.floor(Math.random() * number)
}

// console.log(alpha);
color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

colorButton.addEventListener("click", function() {
    theColor = "rgba(" + getRandomInt(256) + ", " + getRandomInt(256) + ", " + getRandomInt(256) + ", " + Math.random() + ")";
    let alpha = Math.random()
    alpha = alpha.toFixed(2);
    h1.style.color = theColor
    console.log(h1.style.color);
})
// console.log(theColor);
// rgba(0, 0, 0,.5)
// console.log("rgba(" + getRandomInt(256) + ", " + getRandomInt(256) + ", " + getRandomInt(256) + ", " + alpha + ")");
