//função para fazer efeito de digitação na página inicial:
function digitando(elemento, texto, velocidade, onComplete) {
    let i = 0;
    elemento.classList.add("cursor-piscando");
    const interval = setInterval(() => {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            i++;
        } else {
            clearInterval(interval);
            elemento.classList.remove("cursor-piscando");
            if (onComplete) {
                onComplete();
            }
        }
    }, velocidade);
}
document.addEventListener("DOMContentLoaded", function() {  //função que será executada quando o html for carregado
    const linha1Elemento = document.getElementById("linha1");
    const linha2Elemento = document.getElementById("linha2");
    const textoLinha1 = "Bárbara Martins da Silveira,";  //texto que será exibido com o efeito de letras piscando
    const textoLinha2 = "Desenvolvedora front-end";
    const velocidadeDigitacao = 80;  //velocidade de digitação das letras
    if (linha1Elemento && linha2Elemento) {
        digitando(linha1Elemento, textoLinha1, velocidadeDigitacao, () => {
            digitando(linha2Elemento, textoLinha2, velocidadeDigitacao, () => {
            });
        });
    }
});