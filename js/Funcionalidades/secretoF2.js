export function secretoF2() {
    const displayedImages = JSON.parse(localStorage.getItem("displayedImages")) || [];
    const rodape = document.getElementById("rodape");

    if (displayedImages.length === 10) {
        rodape.innerHTML += `<a>B</a>`;
    }
}