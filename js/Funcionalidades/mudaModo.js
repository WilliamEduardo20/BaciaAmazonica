export function claroEscuro() {
    const modo = document.getElementById("modo");
    const site = document.getElementById("site");
    const titulo = document.getElementById("titulo");
    const sub = document.querySelectorAll(".sub-titulo");
    const elementosInfo = document.querySelectorAll(".info");
    const redirect = document.querySelectorAll(".redirect");
    const card = document.querySelectorAll(".card");
    const navBar = document.getElementById("nav-bar");
    const imgBorda = document.querySelectorAll(".bordaR2");
    const rodape = document.getElementById("rodape");

    // Verifica o tema armazenado no localStorage
    const temaAtual = localStorage.getItem("tema");
    let claro = temaAtual !== "escuro"; // Define claro como true ou false com base no tema atual

    // Aplica o tema inicial
    claro ? aplicarTemaClaro() : aplicarTemaEscuro();

    modo.addEventListener('click', function() {
        claro = !claro; // Alterna entre true e false
        claro ? aplicarTemaClaro() : aplicarTemaEscuro();
    });

    function aplicarTemaClaro() {
        modo.innerHTML = "☀️";
        site.style.backgroundColor = "white";
        titulo.style.color = "black";
        rodape.style.color = "#d1d1d1";
        navBar.style.boxShadow = "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px";
        elementosInfo.forEach(elemento => {
            elemento.style.color = 'black';
        });
        imgBorda.forEach(elemento => {
            elemento.style.borderColor = 'black';
        });
        aplicarEstilosCard(card, '0 2px 10px rgba(0, 0, 0, 0.3)');
        aplicarEstilosSub(sub, 'black');
        aplicarEstilosRedirect(redirect, 'black');

        mudarNavBarClaro();

        // Salva a preferência no localStorage
        localStorage.setItem("tema", "claro");
    }

    function aplicarTemaEscuro() {
        modo.innerHTML = "🌙";
        site.style.backgroundColor = "black";
        titulo.style.color = "white";
        rodape.style.color = "rgb(76, 175, 80)";
        navBar.style.boxShadow = "rgba(255, 255, 255, 0.15) 1.95px 1.95px 2.6px";
        elementosInfo.forEach(elemento => {
            elemento.style.color = '#4CAF50';
        });
        imgBorda.forEach(elemento => {
            elemento.style.borderColor = 'white';
        });
        aplicarEstilosCard(card, '0 4px 20px rgba(0, 128, 255, 0.7)');
        aplicarEstilosSub(sub, '#08B2E3');
        aplicarEstilosRedirect(redirect, 'white');

        mudarNavBarEscuro();

        // Salva a preferência no localStorage
        localStorage.setItem("tema", "escuro");
    }

    function aplicarEstilosCard(cards, boxShadow) {
        cards.forEach(elemento => {
            elemento.style.boxShadow = boxShadow;
        });
    }

    function aplicarEstilosSub(subs, color) {
        subs.forEach(elemento => {
            elemento.style.color = color;
        });
    }

    function aplicarEstilosRedirect(redirects, color) {
        redirects.forEach(elemento => {
            elemento.style.color = color;
        });
    }

    function mudarNavBarClaro(){
        navBar.style.backgroundColor = "var(--tercily-color)";
        navBar.style.color = "black";
    }

    function mudarNavBarEscuro(){
        navBar.style.backgroundColor = "var(--escuro)";
        navBar.style.color = "white";
    }
}