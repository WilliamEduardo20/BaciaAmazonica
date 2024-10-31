export function claroEscuro() {
    //Button Modo
    const modo = document.getElementById("modo");
    //Elements
    const site = document.getElementById("site");
    const title = document.getElementById("titulo");
    const navBar = document.getElementById("nav-bar");
    const rod = document.getElementById("rodape");
    const redirect = document.querySelectorAll(".redirection");
    const subTitle = document.querySelectorAll(".sub-titulo");
    const info = document.querySelectorAll(".info");
    const card = document.querySelectorAll(".card");
    const bord = document.querySelectorAll(".bordaR2");

    // Verifica o tema armazenado no localStorage
    const temaAtual = localStorage.getItem("tema");
    let claro = temaAtual !== "escuro"; // Define claro como true ou false com base no tema atual

    // Aplica o tema inicial
    claro ? aplicarTemaClaro() : aplicarTemaEscuro();

    if (modo) {
        modo.addEventListener('click', function() {
            claro = !claro; // Alterna entre true e false
            claro ? aplicarTemaClaro() : aplicarTemaEscuro();
        });
    }

    function aplicarTemaClaro() {
        if (modo) {
            modo.innerHTML = "☀️";
        }
        site.classList.remove("escuro");
        info.forEach(function(element) {
            element.classList.remove("escuro");
        });
        subTitle.forEach(function(element) {
            element.classList.remove("escuro");
        });
        if (navBar) {
            title.classList.remove("escuro");
            navBar.classList.remove("escuro");
            rod.classList.remove("escuro");
            redirect.forEach(function(element) {
                element.classList.remove("escuro");
            });
            card.forEach(function(element) {
                element.classList.remove("escuro");
            });
            bord.forEach(function(element) {
                element.classList.remove("escuro");
            });

            document.getElementById("imgHo").src = "./imgs/icons/claro/homeC.png";
            document.getElementById("imgMa").src = "./imgs/icons/claro/home+C.png";
            document.getElementById("imgAn").src = "./imgs/icons/claro/pawC.png";
            document.getElementById("imgPl").src = "./imgs/icons/claro/leafC.png";
            document.getElementById("imgPe").src = "./imgs/icons/claro/bewareC.png";
            if (document.getElementById("s")) {
                document.getElementById("s").src = "./imgs/icons/claro/secretoC.png";
            }
        }

        // Salva a preferência no localStorage
        localStorage.setItem("tema", "claro");
    }

    function aplicarTemaEscuro() {
        if (modo) {
            modo.innerHTML = "🌙";
        }
        site.classList.add("escuro");
        info.forEach(function(element) {
            element.classList.add("escuro");
        });
        subTitle.forEach(function(element) {
            element.classList.add("escuro");
        });
        if(navBar){
            navBar .classList.add("escuro");
            title.classList.add("escuro");
            rod.classList.add("escuro");
            redirect.forEach(function(element) {
                element.classList.add("escuro");
            });
            card.forEach(function(element) {
                element.classList.add("escuro");
            });
            bord.forEach(function(element) {
                element.classList.add("escuro");
            });

            document.getElementById("imgHo").src = "./imgs/icons/escuro/homeE.png";
            document.getElementById("imgMa").src = "./imgs/icons/escuro/home+E.png";
            document.getElementById("imgAn").src = "./imgs/icons/escuro/pawE.png";
            document.getElementById("imgPl").src = "./imgs/icons/escuro/leafE.png";
            document.getElementById("imgPe").src = "./imgs/icons/escuro/bewareE.png";
            if (document.getElementById("s")) {
                document.getElementById("s").src = "./imgs/icons/escuro/secretoE.png";
            }
        }

        // Salva a preferência no localStorage
        localStorage.setItem("tema", "escuro");
    }
}