// 9. Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.


function imprimirImpares() {
    for (let i = 1; i <= 50; i++) {
        if (i % 2 !== 0) {  // Verifica se o número é ímpar
            console.log(i);
        }
    }
}

imprimirImpares();