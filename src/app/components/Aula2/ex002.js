// 2. Ler um número inteiro e determinar se é divisível por 5. Se for divisível, escrever
// uma mensagem na tela “o número xx é divisível por 5”. Se for negativo imprima “o
// número xx não é divisível por 5”.

const numbers = () => {
    const number = parseInt(prompt("Digite um número:"));

    if(number % 5 === 0){
        console.log(`O número ${number} é divisível por 5!`)
    }else if(number < 0) {
        console.log(`O número ${number} não é divisível por 5!`)
    }
}

numbers();