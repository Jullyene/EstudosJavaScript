// 4. Dado um ano d.C (depois de Cristo), identifique se este é um ano bissexto ou não.
// Considere que para o ano ser bissexto basta que seja divisível por 400. Caso contrário,
// este precisará ser divisível por 4 e não ser divisível por 100

const anoBissexto = () => {

    const ano = parseInt(prompt("Digite um ano:"));

    if(ano / 400 && ano % 4 === 0){
        console.log(`O ano digitado ${ano} é bissexto!`)
    }else {
        console.log(`O ano digitado ${ano} não é bissexto!`)
    }

}

anoBissexto();