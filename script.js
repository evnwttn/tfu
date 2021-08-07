const opn = document.querySelector("#opn");
const slct = document.querySelector("#slct");
    const sYn = document.querySelector("sYn");
    const sInpt = document.querySelector("sInpt");
    const sOtpt = document.querySelector("sOtpt");

    opn.addEventListener("click", (event) => {
        alert("yes");
        opn.classList.add("invisible");
        slct.classList.remove("invisible");
    })

    