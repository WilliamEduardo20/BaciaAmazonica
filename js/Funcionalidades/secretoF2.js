// Armazena o valor "false" na localStorage com a chave "transpa" apenas na primeira execução
if (!localStorage.getItem("transpa")) {
    localStorage.setItem("transpa", "false");
}

export function secretoF2() {
    const displayedImages = JSON.parse(localStorage.getItem("displayedImages")) || [];
    const rodape = document.getElementById("rodape");
    const navBar = document.getElementById("nav-bar");

    // Aplica o estado de transparência ao carregar a página
    applyTransparency();

    // Adiciona um botão de transparência ao rodapé se não existir
    if (!document.getElementById("tranparente")) {
        rodape.innerHTML += `<button id="tranparente" class="button-19" role="button">Transparência</button>`;
        document.getElementById("tranparente").addEventListener("click", toggleTransparency);
    }

    // Função para alternar a transparência
    function toggleTransparency() {
        if (localStorage.getItem("transpa") === "true") {
            navBar.style.backdropFilter = "none"; 
            navBar.style.backgroundColor = "var(--tercily-color)";
            localStorage.setItem("transpa", "false");
        } else {
            navBar.style.backdropFilter = "blur(20px)";
            navBar.style.backgroundColor = "transparent"; 
            localStorage.setItem("transpa", "true");
        }
    }

    // Função para aplicar a configuração de transparência ao carregar a página
    function applyTransparency() {
        if (localStorage.getItem("transpa") === "true") {
            navBar.style.backdropFilter = "blur(20px)";
            navBar.style.backgroundColor = "transparent";
        } else {
            navBar.style.backdropFilter = "none"; 
            navBar.style.backgroundColor = "var(--tercily-color)";
        }
    }
}