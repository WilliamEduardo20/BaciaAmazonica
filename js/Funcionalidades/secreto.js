import { redireciona } from "./redireciona.js";

export function secreto() {
    // Verifica se todos os itens necessários no localStorage estão definidos como "true"
    if (localStorage.getItem("s1") === "true" && 
        localStorage.getItem("s2") === "true" && 
        localStorage.getItem("s3") === "true" &&
        localStorage.getItem("s4") === "true" &&
        localStorage.getItem("s5") === "true") {
        
        const nav = document.getElementById("box"); // Obtém o elemento de navegação

        // Verifica se o elemento nav existe antes de modificá-lo
        if (nav) {
            const secreto = `
            <a id="secreto" href="./jogo/index.html">
                <div class="redirection" role="button" tabindex="0">
                    <img id="s" src="./imgs/icons/escuro/secretoE.png" class="icon" alt="???">
                    <p>???</p>
                </div>
            </a>`;
            
            // Usa innerHTML para adicionar o novo conteúdo
            nav.innerHTML += secreto; 

            // Reattach event listeners after modifying innerHTML
            redireciona(); 
        }
    }
}