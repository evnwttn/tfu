const opn = document.querySelector("#opn");

const slct = document.querySelector("#slct");
    const slctYn = document.querySelector("#slctYn");
    const slctInp = document.querySelector("#slctInp");
    const slctOut = document.querySelector("#slctOut");

const yn = document.querySelector("#yn");

const inp = document.querySelector("#inp");
    const inpAdd = document.querySelector("#inpAdd");
    const userInput = document.querySelector("#userInput");
    const inpReady = document.querySelector("#inpReady");
    let inpArr = [];

const outp = document.querySelector("#outp");

// INTERFACE 

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
            inpEnter();
        })

            inpAdd.addEventListener("click", (event) => { // PUSH INPUT
                addInp();
            })
                
            inpReady.addEventListener("click", (event) => { // RANDOMIZE INPUT
                runInp();
            })

        slctOut.addEventListener("click", (event) => { // CLICK OUTPUT
            slct.classList.add("invisible");
            outp.classList.remove("invisible");
        })

            outp.addEventListener("click", (event) => {
                runOutp();
            })




// FUNCTIONS

function runYn() { // YES OR NO
    let yni = ["yes.", "no."];
    let ynj = yni[Math.floor(Math.random() * yni.length)];
    document.getElementById("yn").innerHTML = `${ynj}`;
    // yn.addEventListener("click", (event) => {
    //     runYn();
    // })
}

function addInp() {  // PUSH TO INPUT ARRAY
    inpArr.push(document.getElementById("userInput").value); 
    document.getElementById("userInput").value="";
} 

function runInp() { // INPUT ARRAY RANDOMIZER
    let inpOut = inpArr[Math.floor(Math.random() * inpArr.length)];
    document.getElementById("inp").innerHTML = `${inpOut}`;
}

function inpEnter() { // ALLOWS ENTER IN INPUT
    document.getElementById("userInput").addEventListener("keyup", // ALLOWS ENTER
                function(event) {
                    event.preventDefault();
                    if (event.keyCode === 13) {
                    document.getElementById("inpAdd").click();
                    }
                });
}

function runOutp() { // RUN OUTPUT
    let outPi = ["Bar None.", 
                "The Rose.",
                "Peter Easton.",
                "Needs, Military Road",
                "Ultrafar.",
                "Bowling.",
                "Eatin' Ass.",
                "Assin' Eat."];
    let outPj = outPi[Math.floor(Math.random() * outPi.length)];
    document.getElementById("outp").innerHTML = `${outPj}`;
}