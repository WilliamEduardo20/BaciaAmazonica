import { claroEscuro } from "./Funcionalidades/mudaModo.js";
import { redireciona } from "./Funcionalidades/redireciona.js";
import { creatCardAnimal } from "./Funcionalidades/criaCartão.js";
import { criaMensagem } from "./Funcionalidades/mensagCard.js";
import { secreto } from "./Funcionalidades/secreto.js";
import { secretoF2 } from "./Funcionalidades/secretoF2.js";
import { barraResponsivaPC } from "./Funcionalidades/barraRespon.js";
import { carrosel } from "./Funcionalidades/carrosel.js";
import { aleatorio } from "./Funcionalidades/aleatorio.js";

//Cria cartão na página
creatCardAnimal();

//Mostra detalhes do Cartão
criaMensagem();

//Modo Escuro e Modo Claro
claroEscuro();

//Redireciona Para outra páginas
redireciona();

//Barra Responsiva
barraResponsivaPC();

//Carrosel de Imagens
carrosel();

//Aleatoriza as Imagens do Carrosel
aleatorio();

//???//
secreto();
secretoF2();

const apaga = document.getElementById("bioma");
apaga.addEventListener('click', () => {
    localStorage.setItem("s1", "false");
    localStorage.setItem("s2", "false");
    localStorage.setItem("s3", "false");
    localStorage.setItem("s4", "false");
    localStorage.setItem("s5", "false");
    localStorage.removeItem('displayedImages');
    if (document.getElementById("secreto")) {
        document.getElementById("secreto").remove();
    } else if (document.getElementById("secretoF2")) {
        document.getElementById("secretoF2").remove();
    }
});