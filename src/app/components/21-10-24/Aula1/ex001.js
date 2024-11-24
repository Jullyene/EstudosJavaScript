// 1. Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

console.log("FUNCIONANDO");


function getNota() {
    const notaFinal = parseFloat(prompt("Digite sua nota por gentileza entre 0 a 10:"));
    return notaFinal;
}


function tratamentoNota() {
    let notaFinal;
    do {
        notaFinal = getNota();
        if (notaFinal >= 0 && notaFinal <= 10) {
            console.log(`Nota válida! Nota digitada: ${notaFinal}`);
        } else {
            console.log(`Nota inválida! Digite novamente.`);
        }
    } while (notaFinal < 0 || notaFinal > 10 || isNaN(notaFinal)); 
}


tratamentoNota();