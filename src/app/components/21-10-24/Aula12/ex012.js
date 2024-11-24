// 12. Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo:
//     ◦ 

// Tabuada de 5:
// 5 X 1 = 5
// 5 X 2 = 10
// ...
// 5 X 10 = 50

function gerarTabuada() {

    let numero = parseInt(prompt("Digite um número entre 1 e 10 para ver sua tabuada:"));

   
    if (numero >= 1 && numero <= 10) {
        console.log(`Tabuada de ${numero}:`);
        
       
        for (let i = 1; i <= 10; i++) {
            let resultado = numero * i;
            console.log(`${numero} X ${i} = ${resultado}`);
        }
    } else {
        console.log("Por favor, digite um número entre 1 e 10.");
    }
}

gerarTabuada();