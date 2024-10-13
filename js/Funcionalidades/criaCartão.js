import { animais } from "./Boblioteca/bibAnimais.js";
import { plantas } from "./Boblioteca/bibPlantas.js";

export function creatCardAnimal() {
    // Verifica se elemento existe
    const containerA = document.getElementById("cards-animais");
    const containerP = document.getElementById("cards-plantas");

    if (containerA) {
        // Cria cartão Automaticamente
        for (const cardCatalogo of animais) {
            const cardAnimal = `<div id="${cardCatalogo.id}" class="card">
                <img src="${cardCatalogo.img}" alt="${cardCatalogo.nome}">
                <div class="card-content">
                    <h2>${cardCatalogo.nome}</h2>
                    <p><strong>Nome Científico: </strong>${cardCatalogo.cientifico}</p>
                    <p><strong>Grupo: </strong>${cardCatalogo.grupo}</p>
                    <p class="threat-level"><strong>Grau de Ameaça: </strong>${cardCatalogo.ameaca}</p>
                </div>
            </div>`;

            containerA.innerHTML += cardAnimal;
        }
    } 
    
    if (containerP) {
        // Cria cartão Automaticamente
        for (const cardCatalogo of plantas) {
            const cardPlanta = `<div id="${cardCatalogo.id}" class="card">
                <img src="${cardCatalogo.img}" alt="${cardCatalogo.nome}">
                <div class="card-content">
                    <h2>${cardCatalogo.nome}</h2>
                    <p><strong>Nome Científico: </strong>${cardCatalogo.cientifico}</p>
                    <p><strong>Grupo: </strong>${cardCatalogo.grupo}</p>
                    <p class="threat-level"><strong>Grau de Ameaça: </strong>${cardCatalogo.ameaca}</p>
                </div>
            </div>`;

            containerP.innerHTML += cardPlanta;
        }
    }
}