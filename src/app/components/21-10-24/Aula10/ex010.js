// 10. Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles.

function gerarNumerosNoIntervalo() {
   
    let numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
    let numero2 = parseInt(prompt("Digite o segundo número inteiro:"));

    
    let inicio = Math.min(numero1, numero2);
    let fim = Math.max(numero1, numero2);


    for (let i = inicio + 1; i < fim; i++) {
        console.log(i);
    }
}

gerarNumerosNoIntervalo();