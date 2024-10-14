export function barraResponsivaPC() {
    // Variáveis
    let opaco = false;
    const box = document.getElementById('box');
    const button = document.getElementById('modo');
    const liBtn = [
        document.getElementById('home'),
        document.getElementById('mais'),
        document.getElementById('animais'),
        document.getElementById('plantas'),
        document.getElementById('perigo'),
    ];
    const navBar = document.getElementById('nav-bar');

    function mudaBarra() {
        if (!opaco) {
            box.classList.add('addOp');
            box.classList.add('opacty');
            button.classList.add('transition');
            button.classList.add('opacty');
            button.classList.remove('button-29');
            // Usar setTimeout para adicionar a classe de redirecionamento após a transição
            setTimeout(() => {
                // Aumenta a barra e espera antes de mostrar os elementos
                navBar.style.transition = "0.8s ease";
                navBar.style.width = "200px";
                navBar.style.height = "100px";
                liBtn.forEach(elemento => {
                    elemento.classList.remove('redirection');
                });
            }, 500); // Tempo igual ao da transição
            opaco = true;
        } else {
            // Diminuir a altura da barra e esperar antes de esconder os elementos
            navBar.style.height = "85px";
            navBar.style.removeProperty('width');
            // Usar setTimeout para remover a classe de redirecionamento após a transição
            setTimeout(() => {
                liBtn.forEach(elemento => {
                    elemento.classList.add('redirection');
                });
                button.classList.add('button-29');
                button.classList.remove('opacty');
                button.classList.remove('transition');
                box.classList.remove('opacty');
                box.classList.remove('addOp');
            }, 800); // Tempo igual ao da transição
            opaco = false;
        }
    }

    // Aplicação do evento
    const bioma = document.getElementById("bioma");
    bioma.addEventListener('click', mudaBarra);
}