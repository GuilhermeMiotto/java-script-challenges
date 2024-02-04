const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let tentativas = 0;
let acertou = false;

while (!acertou) {
  
    let palpite = prompt("Tente adivinhar o número (entre 1 e 100):");

    palpite = parseInt(palpite);

    if (isNaN(palpite)) {
        alert("Por favor, digite um número válido.");
    } else {
        tentativas++;

        if (palpite === numeroAleatorio) {
            acertou = true;
            alert(`Parabéns! Você acertou o número em ${tentativas} tentativas.`);
        } else {

            let dica = palpite > numeroAleatorio ? "Muito alto!" : "Muito baixo!";
            alert(dica);
        }
    }
}