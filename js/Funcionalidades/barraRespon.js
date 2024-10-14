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

    // Função para mudar a barra
    function mudaBarra() {
        if (!opaco) {
            box.classList.add('addOp', 'opacty');
            button.classList.add('transition', 'opacty');
            button.classList.remove('button-29');

            // Usar setTimeout para adicionar a classe de redirecionamento após a transição
            setTimeout(() => {
                navBar.style.transition = "0.8s ease";
                navBar.style.height = "200px"; // Aumenta a altura
                navBar.style.width = "100px";  // Mantém a largura

                liBtn.forEach(elemento => {
                    elemento.classList.remove('redirection');
                    elemento.style.display = 'block'; // Exibe os elementos em coluna
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
                    elemento.style.display = 'none'; // Oculta os elementos
                });
                button.classList.add('button-29');
                button.classList.remove('opacty', 'transition');
                box.classList.remove('opacty', 'addOp');
            }, 800); // Tempo igual ao da transição

            opaco = false;
        }
    }

    // Aplicação do evento
    const bioma = document.getElementById("bioma");
    bioma.addEventListener('click', mudaBarra);
}