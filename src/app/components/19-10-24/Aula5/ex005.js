// 5. Faça uma algoritmo que calcule o salário líquido do funcionário da empresa XYZ.
// Leia o salário base e a idade. Calcule o bônus do funcionário, sendo o mesmo calculado
// pela seguinte regra de negócio: para funcionários com salário maior ou igual a 1000 e
// com idade superior a 50 anos, receberá 10% de bônus; funcionários com salário menor
// de 1000,00 e com idade até 50 anos receberá somente 5%. Imprima o salário base, o
// bônus do funcionário e o salário líquido.

const getSalario = () => {
    const salarioBase = parseFloat(prompt("Digite o seu salário:"));
    const idade = parseInt(prompt("Digite sua idade:"));
    
    return{salarioBase, idade}
}


const bonus = (salarioBase, idade) => {
    let desconto = 0;
    if(salarioBase >= 1000 && idade > 50){
        let desconto = salarioBase * 0.10;
        console.log(`O salário final com desconto: R$${salarioBase - desconto}. Salário líquido: ${salarioBase}`);
    }if(salarioBase < 1000 && idade <= 50){
        let desconto = salarioBase * 0.05;
        console.log(`O salário final com desconto: R$${salarioBase - desconto}. Salário líquido: ${salarioBase}`);
    }
}

const { salarioBase, idade } = getSalario();
bonus(salarioBase, idade);