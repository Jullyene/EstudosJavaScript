// 5. Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. Valide a entrada e permita repetir a operação.

function calcularAnos() {
    let repetir = true;

    while (repetir) {
       
        let populacaoA = parseInt(prompt("Digite a população inicial do país A (deve ser maior que 0):"));
        while (isNaN(populacaoA) || populacaoA <= 0) {
            alert("A população deve ser um número maior que 0.");
            populacaoA = parseInt(prompt("Digite a população inicial do país A (deve ser maior que 0):"));
        }

        let populacaoB = parseInt(prompt("Digite a população inicial do país B (deve ser maior que 0):"));
        while (isNaN(populacaoB) || populacaoB <= 0) {
            alert("A população deve ser um número maior que 0.");
            populacaoB = parseInt(prompt("Digite a população inicial do país B (deve ser maior que 0):"));
        }

        
        let taxaCrescimentoA = parseFloat(prompt("Digite a taxa de crescimento anual do país A (em %):")) / 100;
        while (isNaN(taxaCrescimentoA) || taxaCrescimentoA <= 0) {
            alert("A taxa de crescimento deve ser um número maior que 0.");
            taxaCrescimentoA = parseFloat(prompt("Digite a taxa de crescimento anual do país A (em %):")) / 100;
        }

        let taxaCrescimentoB = parseFloat(prompt("Digite a taxa de crescimento anual do país B (em %):")) / 100;
        while (isNaN(taxaCrescimentoB) || taxaCrescimentoB <= 0) {
            alert("A taxa de crescimento deve ser um número maior que 0.");
            taxaCrescimentoB = parseFloat(prompt("Digite a taxa de crescimento anual do país B (em %):")) / 100;
        }

       
        let anos = 0;
        while (populacaoA < populacaoB) {
            populacaoA += populacaoA * taxaCrescimentoA;
            populacaoB += populacaoB * taxaCrescimentoB;
            anos++;
        }

       
        alert(`Serão necessários ${anos} anos para que a população do país A ultrapasse ou iguale a população do país B.`);

        let resposta = prompt("Deseja repetir a operação? (Digite 'sim' para continuar ou qualquer outra coisa para sair):").toLowerCase();
        repetir = resposta === "sim";
    }
}


calcularAnos();