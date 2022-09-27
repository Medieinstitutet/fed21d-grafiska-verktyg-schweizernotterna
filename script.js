// hämtar variabler
let HamMenu = document.getElementById("HamburgerMenu");

// klicka på menyn
HamMenu.addEventListener("click", () => {

    openMenu();

});


function openMenu() {
    // skapa meny
    let MenuSection = document.createElement("section");
    MenuSection.classList = "MenuSection";

    MenuSection.innerHTML = `
    <button id="CloseMenu">
        <span id="spanOne"></span>
        <span id="spanTwo"></span>
    </button>

    <h2>Våra Paket</h2>
    <h2>Boka</h2>
    <h2>Om oss</h2>
    `;

    document.body.prepend(MenuSection)

    document.getElementById("CloseMenu").addEventListener("click", () => {
        location.reload();
    });

};

// öppna cookiebar
window.addEventListener("load", () => {

    let cookiebar = document.createElement("div");
    cookiebar.classList = "CookieBar";

    cookiebar.innerHTML = `
    <p id="CookieText">Cookie Cookie Cookie<br> Cookie Cookie Cookie<br> Cookie Cookie.</p>

    <div id="btns">
        <button id="btnAcc">Acceptera</button>
        <button id="btnDen">Neka</button>
    </div>
    `
    document.body.append(cookiebar);

    //acceptera knappen
    let btnAcc = document.getElementById("btnAcc");
    btnAcc.addEventListener("click", () => {
        CloseCookie();
    });

    // stänga cookiebar
    function CloseCookie() {
        cookiebar.style.display = "none";
    }

    //neka knappen 
    let btnDen = document.getElementById("btnDen");
    btnDen.addEventListener("click", () => {
        alert("Du måste acceptera cookies!")
    })
});


// animation julkula
gsap.fromTo('#animation', {
    opacity: 0,
}, { 
    opacity: 1,
    duration: 3,
    rotation: 365,
    transformOrigin: "left right",
});