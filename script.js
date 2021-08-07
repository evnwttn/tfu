const opn = document.querySelector("#opn");
const slct = document.querySelector("#slct");
    const slctYn = document.querySelector("#slctYn");
    const slctInp = document.querySelector("#slctInp");
    const slctOut = document.querySelector("#slctOut");
const yn = document.querySelector("#yn");
const inp = document.querySelector("#inp");
    const inpAdd = document.querySelector("#inpAdd");
    let inpArr = [];

    opn.addEventListener("click", (event) => { // OPENING SCREEN
        opn.classList.add("invisible");
        slct.classList.remove("invisible");
    })

        slctYn.addEventListener("click", (event) => { // CLICK Y/N
            slct.classList.add("invisible");
            yn.classList.remove("invisible");
            runYn();
        })
    
        slctInp.addEventListener("click", (event) => { // CLICK INPUT
            slct.classList.add("invisible");
            inp.classList.remove("invisible");
        })

            inpAdd.addEventListener("click", (event) => { // PUSH INPUT
                alert("yes");
            })

    slctOut.addEventListener("click", (event) => { // CLICK OUTPUT
        alert("yesyesyesyes");
        slct.classList.add("invisible");
    })


// FUNCTIONS

function runYn() { // YES OR NO
    let yni = ["yes.", "no."];
    let ynj = yni[Math.floor(Math.random() * yni.length)];
    document.getElementById("yn").innerHTML = `${ynj}`;
    yn.addEventListener("click", (event) => {
        runYn();
    })
}