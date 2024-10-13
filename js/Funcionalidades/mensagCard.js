import { animais } from "./Boblioteca/bibAnimais.js";
import { plantas } from "./Boblioteca/bibPlantas.js";

export function criaMensagem() {
    if (document.getElementById("cards-animais")) {
        const box = document.getElementById("message-box");
        var press = false;
        for (let i = 0; i < animais.length; i++) {
            document.getElementById(animais[i].id).addEventListener('click', () => {
                box.innerHTML = animais[i].mensagem;
                press = true;
                if (press == true) {
                    // Exibe a caixa de mensagem
                    box.style.display = "block";
                    // Adiciona evento de movimento do mouse
                    press = false;
                }
            });
        }
    
        document.addEventListener('mousemove', (event) => {
            box.style.left = `${event.pageX + 10}px`;
            box.style.top = `${event.pageY + 10}px`;
        });
        
        document.addEventListener('click', (event) => {
            if (!event.target.closest('.card') && !box.contains(event.target)) {
                box.style.display = 'none';
            }
        });
    } else if (document.getElementById("cards-plantas")) {
        var box = document.getElementById("message-box");
        var press = false;
        for (let i = 0; i < plantas.length; i++) {
            document.getElementById(plantas[i].id).addEventListener('click', () => {
                box.innerHTML = plantas[i].mensagem;
                press = true;
                if (press == true) {
                    // Exibe a caixa de mensagem
                    box.style.display = "block";
                    // Adiciona evento de movimento do mouse
                    press = false;
                }
            });
        }

        document.addEventListener('mousemove', (event) => {
            box.style.left = `${event.pageX + 10}px`;
            box.style.top = `${event.pageY + 10}px`;
        });
        
        document.addEventListener('click', (event) => {
            if (!event.target.closest('.card') && !box.contains(event.target)) {
                box.style.display = 'none';
            }
        });
    }
}