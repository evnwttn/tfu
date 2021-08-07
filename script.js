const opn = document.querySelector("#opn");
const slct = document.querySelector("#slct");
    const slctYn = document.querySelector("#slctYn");
    const slctIn = document.querySelector("#slctIn");
    const slctOut = document.querySelector("#slctOut");
const yn = document.querySelector("#yn");

    opn.addEventListener("click", (event) => {
        alert("yes");
        opn.classList.add("invisible");
        slct.classList.remove("invisible");
    })

    slctYn.addEventListener("click", (event) => {
        alert("yesyes");
        slct.classList.add("invisible");
        yn.classList.remove("invisible");
        runYn();
    })
    
    slctIn.addEventListener("click", (event) => {
        alert("yesyesyes");
        slct.classList.add("invisible");
    })

    slctOut.addEventListener("click", (event) => {
        alert("yesyesyesyes");
        slct.classList.add("invisible");
    })


// FUNCTIONS

function runYn() { // YES OR NO
let yni = ["yes.",
            "no."];
let ynj = yni[Math.floor(Math.random() * yni.length)];
    document.getElementById("yn").innerHTML = `${ynj}`;
    yn.addEventListener("click", (event) => {
        runYn();
    })
}