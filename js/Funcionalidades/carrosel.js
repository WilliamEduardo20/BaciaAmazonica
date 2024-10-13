export function carrosel(){
    let indiceAtual = 0;
    const imagens = document.querySelectorAll('.imagens img');
    const totalImagens = imagens.length;
    let intervalo;

    function mudarImagem(direcao) {
        indiceAtual += direcao;

        if (indiceAtual >= totalImagens) {
            indiceAtual = 0;
        } else if (indiceAtual < 0) {
            indiceAtual = totalImagens - 1;
        }

        const deslocamento = -indiceAtual * 100; // Muda a posição
        document.querySelector('.imagens').style.transform = `translateX(${deslocamento}%)`;

        // Atualiza a acessibilidade
        imagens.forEach((img, index) => {
            img.setAttribute('aria-hidden', index !== indiceAtual);
        });
    }

    // Função para mudar automaticamente as imagens
    function iniciarCarrossel() {
        intervalo = setInterval(() => {
            mudarImagem(1); // Muda para a próxima imagem automaticamente
        }, 3000); // Muda a cada 3 segundos
    }

    // Parar o carrossel ao passar o mouse
    document.querySelector('.carrossel').addEventListener('mouseenter', () => {
        clearInterval(intervalo);
    });
    
    document.querySelector('.carrossel').addEventListener('mouseleave', () => {
        iniciarCarrossel();
    });
    
    // Adicionando eventos aos botões
    document.querySelector('.prev').addEventListener('click', () => {
        clearInterval(intervalo); // Para o carrossel automático ao clicar
        mudarImagem(-1);
    });
    
    document.querySelector('.next').addEventListener('click', () => {
        clearInterval(intervalo); // Para o carrossel automático ao clicar
        mudarImagem(1);
    });
    
    // Inicia o carrossel automático
    iniciarCarrossel();
}