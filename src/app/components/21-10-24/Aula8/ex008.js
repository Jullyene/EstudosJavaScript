// 8. Faça um programa que leia 5 números e informe a soma e a média dos números. 

function calcularSomaEMedia() {
    let soma = 0;
    
  
    for (let i = 1; i <= 5; i++) {
        let numero = parseFloat(prompt(`Digite o ${i}º número:`));
        soma += numero; 
    }
    
  
    let media = soma / 5;
    
 
    alert(`A soma dos números é: ${soma}`);
    alert(`A média dos números é: ${media}`);
}

calcularSomaEMedia();