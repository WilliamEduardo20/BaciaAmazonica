import { claroEscuro } from "./mudaModo.js";
import { redireciona } from "./redireciona.js";

export function barraResponsivaPC() {
    // Variáveis
    let opaco = false;
    const box = document.getElementById('box');
    const button = document.getElementById('modo');
    const navBar = document.getElementById('nav-bar');

    function mudaBarra() {
        if (!opaco) {
            box.style.transition = 'opacity 0.5s ease';
            box.style.opacity = '0';
            button.style.opacity = '0';
            
            setTimeout(() => {
                box.style.display = 'none';
                button.style.display = 'none';
                navBar.classList.add("compacta");
                opaco = true;
            }, 10);
        } else {
            navBar.classList.remove("compacta");
            
            setTimeout(() => {
                box.style.display = 'flex';
                button.style.display = 'block';
                box.style.opacity = '1';
                button.style.opacity = '1';
                claroEscuro();
                redireciona();
                opaco = false;
            }, 800);
        }
    }

    // Aplicação do evento
    const bioma = document.getElementById("bioma");
    bioma.addEventListener('click', mudaBarra);
}

export function barraResponsivaMobi(){
    // Variáveis
    let opaco = false;
    const box = document.getElementById('box');
    const button = document.getElementById('modo');
    const navBar = document.getElementById('nav-bar');

    function mudaBarra() {
        if (!opaco) {
            box.style.transition = 'opacity 0.5s ease';
            box.style.opacity = '0';
            button.style.opacity = '0';
            
            setTimeout(() => {
                box.style.display = 'none';
                button.style.display = 'none';
                opaco = true;
            }, 10);
        } else {
            box.style.display = 'flex';
            button.style.display = 'block';
            
            setTimeout(() => {
                box.style.opacity = '1';
                button.style.opacity = '1';
                claroEscuro();
                redireciona();
                opaco = false;
            }, 500);
        }
    }

    // Aplicação do evento
    const bioma = document.getElementById("bioma");
    bioma.addEventListener('click', mudaBarra);
}