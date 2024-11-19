// 3. Faça um algoritmo que leia um número inteiro e diga se este é positivo ou negativo.
// Se o valor digitado for zero, informe na tela uma mensagem informando que o valor
// digitado é zero, e sendo assim não pode calcular se é positivo ou negativo.


const readNumber  = () =>  {
    const number = parseInt(prompt("Digite um número:"));

    if(number === 0) {
        console.log("Valor digitado é igual a zero!");
    }if(number > 0) {
        console.log("Valor digitado é positivo!");
    }else if (number < 0){
        console.log("Valor digitado é negativo!");

    }
}

readNumber();