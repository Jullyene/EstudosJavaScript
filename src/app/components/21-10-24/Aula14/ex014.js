// 14. Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números ímpares.

function contarParesEImpares() {
    let pares = 0;  
    let impares = 0;  
    
    
    for (let i = 1; i <= 10; i++) {
        let numero = parseInt(prompt(`Digite o ${i}º número inteiro:`));
        
        
        if (numero % 2 === 0) {
            pares++; 
        } else {
            impares++;  
        }
    }
    
    
    alert(`Quantidade de números pares: ${pares}`);
    alert(`Quantidade de números ímpares: ${impares}`);
}

contarParesEImpares();