// 7. Faça um programa que leia 5 números e informe o maior número.

function encontrarMaiorNumero() {
    let maiorNumero = -Infinity; // Inicializa com um valor muito baixo
    
    // Ler 5 números
    for (let i = 1; i <= 5; i++) {
        let numero = parseInt(prompt(`Digite o ${i}º número:`));
        
        // Comparar se o número atual é maior que o maior número encontrado
        if (numero > maiorNumero) {
            maiorNumero = numero;
        }
    }
    
    // Exibir o maior número
    alert(`O maior número é: ${maiorNumero}`);
}

encontrarMaiorNumero();