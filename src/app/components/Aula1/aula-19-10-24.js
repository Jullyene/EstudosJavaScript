//1. Ler 3 números inteiros e determinar quantos são iguais.


function readNumbers () {
    const number1 = parseInt(prompt("Digite o primeiro número inteiro:"));
    const number2 = parseInt(prompt("Digite o segundo número inteiro:"));
    const number3 = parseInt(prompt("Digite o terceiro número inteiro:"));
    return { number1, number2,number3};
}

function determinaNumbersIguais (number1, number2, number3) {
    let soma = 0;
    if(number1 === number2){
        console.log(`Os números: ${number1} e ${number2} são iguais!`)
        soma = soma + 1;
    }if (number1 === number3) {
        console.log(`Os números: ${number1} e ${number3} são iguais!`)
        soma = soma + 1;
    }if(number2 === number3){
        console.log(`Os números: ${number2} e ${number3} são iguais!`)
        soma = soma + 1;
    }

    console.log("Quantos são iguais:",soma)
}

const { number1, number2, number3} = readNumbers();
determinaNumbersIguais(number1, number2,number3);

