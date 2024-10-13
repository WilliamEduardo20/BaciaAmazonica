// Armazena o valor "false" na localStorage com a chave "transpa"
localStorage.setItem("transpa", "false");

export function secretoF2() {
    // Obtém as imagens exibidas da localStorage ou inicializa como um array vazio
    const displayedImages = JSON.parse(localStorage.getItem("displayedImages")) || [];
    const rodape = document.getElementById("rodape");
    const navBar = document.getElementById("nav-bar");

    // Se 10 imagens foram exibidas, adiciona um botão de transparência ao rodapé
    if (displayedImages.length === 10) {
        // Verifica se o botão já existe para evitar duplicatas
        if (!document.getElementById("tranparente")) {
            rodape.innerHTML += `<button id="tranparente" class="button-19" role="button">Transparência</button>`;
            document.getElementById("tranparente").addEventListener("click", toggleTransparency);
        }
    }

    // Função para alternar a transparência
    function toggleTransparency() {
        // Verifica o estado atual da transparência
        if (localStorage.getItem("transpa") === "true") {
            // Desativa a transparência
            navBar.style.backdropFilter = "none"; 
            navBar.style.backgroundColor = "var(--tercily-color)"; // Define a cor de fundo original
            localStorage.setItem("transpa", "false"); // Atualiza o estado na localStorage
        } else {
            // Ativa a transparência
            navBar.style.backdropFilter = "blur(20px)";
            navBar.style.backgroundColor = "transparent"; 
            localStorage.setItem("transpa", "true"); // Atualiza o estado na localStorage
        }
    }
}