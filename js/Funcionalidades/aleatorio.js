import { images } from "./Boblioteca/bibImages.js";
import { secretoF2 } from "./secretoF2.js"; // Import the secretoF2 function

// Função para obter as imagens exibidas do local storage ou inicializar um array vazio
function getDisplayedImages() {
    const storedImages = localStorage.getItem('displayedImages');
    return storedImages ? JSON.parse(storedImages) : [];
}

// Função para salvar as imagens exibidas no local storage
function saveDisplayedImages(images) {
    localStorage.setItem('displayedImages', JSON.stringify(images));
}

export function aleatorio() {
    const imgElements = [
        document.getElementById("img1"),
        document.getElementById("img2"),
        document.getElementById("img3"),
        document.getElementById("img4"),
        document.getElementById("img5")
    ];

    // Recupera as imagens exibidas anteriormente
    let displayedImages = getDisplayedImages();

    // Embaralha o array de imagens
    const shuffledImages = shuffleArray(images.slice());

    // Atribui as imagens aos elementos img e verifica se já foram exibidas
    imgElements.forEach((imgElement, index) => {
        const imgSrc = shuffledImages[index];

        // Adiciona a imagem ao array de exibidas se não estiver lá
        if (!displayedImages.includes(imgSrc)) {
            displayedImages.push(imgSrc);
            imgElement.src = imgSrc;
        }
    });

    // Salva as imagens exibidas atualizadas de volta no local storage
    saveDisplayedImages(displayedImages);
}

// Função para embaralhar um array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca elementos
    }
    return array;
}