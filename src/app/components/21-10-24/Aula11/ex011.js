// 11. Altere o programa anterior para mostrar no final a soma dos números.

function gerarNumerosNoIntervaloESomar() {
    let numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
    let numero2 = parseInt(prompt("Digite o segundo número inteiro:"));

   
    let inicio = Math.min(numero1, numero2);
    let fim = Math.max(numero1, numero2);

    
    let soma = 0;

   
    for (let i = inicio + 1; i < fim; i++) {
        console.log(i);  
        soma += i;       
    }

    
    console.log(`A soma dos números no intervalo é: ${soma}`);
    alert(`A soma dos números no intervalo é: ${soma}`);
}

gerarNumerosNoIntervaloESomar();