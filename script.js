const open = document.querySelector("#open");

const selectScreen = document.querySelector("#selectScreen");
    const selectYn = document.querySelector("#selectYn");
    const selectInput = document.querySelector("#selectInput");
    const selectOutput = document.querySelector("#selectOutput");

const yn = document.querySelector("#yn");

const inputScreen = document.querySelector("#inputScreen");
    const inputAdd = document.querySelector("#inputAdd");
    const userInput = document.querySelector("#userInput");
    const inputReady = document.querySelector("#inputReady");
    let inputArr = [];

const outputScreen = document.querySelector("#outputScreen");

// INTERFACE 

    open.addEventListener("click", (event) => { // OPENING SCREEN
        open.classList.add("invisible");
        selectScreen.classList.remove("invisible");
    })

        selectYn.addEventListener("click", (event) => { // CLICK Y/N
            selectScreen.classList.add("invisible");
            yn.classList.remove("invisible");
            runYn();
        })
    
        selectInput.addEventListener("click", (event) => { // CLICK INPUT
            selectScreen.classList.add("invisible");
            inputScreen.classList.remove("invisible");
            inputEnter();
        })

            inputAdd.addEventListener("click", (event) => { // PUSH INPUT
                addInput();
            })
                
            inputReady.addEventListener("click", (event) => { // RANDOMIZE INPUT
                runInput();
            })

        selectOutput.addEventListener("click", (event) => { // CLICK OUTPUT
            selectScreen.classList.add("invisible");
            outputScreen.classList.remove("invisible");
        })

            outputScreen.addEventListener("click", (event) => {
                runOutput();
            })




// FUNCTIONS

function runYn() { // YES OR NO
    let yni = ["yes.", "no."];
    let ynj = yni[Math.floor(Math.random() * yni.length)];
    document.getElementById("yn").innerHTML = `${ynj}`;
}

function addInput() {  // PUSH TO INPUT ARRAY
    inputArr.push(document.getElementById("userInput").value); 
    document.getElementById("userInput").value="";
} 

function runInput() { // INPUT ARRAY RANDOMIZER
    let inpOut = inputArr[Math.floor(Math.random() * inputArr.length)];
    document.getElementById("inputScreen").innerHTML = `${inpOut}`;
}

function inputEnter() { // ALLOWS ENTER IN INPUT
    document.getElementById("userInput").addEventListener("keyup", // ALLOWS ENTER
                function(event) {
                    event.preventDefault();
                    if (event.keyCode === 13) {
                    document.getElementById("inputAdd").click();
                    }
                });
}

function runOutput() { // RUN OUTPUT
    let outputi = ["BREWDOCK", 
                "TOSLOW",
                "MOHAMED ALI",
                "SUN SUSHI",
                "3 SISTERS",
                "#4",
                "YELLOWBELLY / UNDERBELLY",
                "MERCHANT TAVERN",
                "ADELAIDE OYSTER HOUSE",
                "THE GROUNDS CAFE",
                "FISH EXCHANGE",
                "CHINCHED",
            ];
    let outputj = outputi[Math.floor(Math.random() * outputi.length)];
    document.getElementById("outputScreen").innerHTML = `${outputj}`;
}