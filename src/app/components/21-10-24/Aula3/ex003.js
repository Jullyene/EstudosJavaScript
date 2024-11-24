// 3. Faça um programa que leia e valide as seguintes informações:
//     1. Nome: maior que 3 caracteres;
//     2. Idade: entre 0 e 150;
//     3. Salário: maior que zero;
//     4. Sexo: 'f' ou 'm';
//     5. Estado Civil: 's', 'c', 'v', 'd';Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length

function Validar() {
    const pessoaTrabalhadora = {
        nome: "",
        idade: 0,
        salario: 0,
        sexo: "",
        estadoCivil: ""
    };

    // Validar nome
    let nome = prompt("Digite seu nome (maior que 3 caracteres):");
    while (nome.length <= 3) {
        alert("O nome deve ter mais que 3 caracteres.");
        nome = prompt("Digite seu nome (maior que 3 caracteres):");
    }
    pessoaTrabalhadora.nome = nome;

    // Validar idade
    let idade = prompt("Digite sua idade (entre 0 e 150):");
    while (idade === "" || +idade < 0 || +idade > 150) {
        alert("A idade deve estar entre 0 e 150.");
        idade = prompt("Digite sua idade (entre 0 e 150):");
    }
    pessoaTrabalhadora.idade = +idade;

    // Validar salário
    let salario = prompt("Digite seu salário (maior que 0):");
    while (salario === "" || +salario <= 0) {
        alert("O salário deve ser maior que 0.");
        salario = prompt("Digite seu salário (maior que 0):");
    }
    pessoaTrabalhadora.salario = +salario;

    // Validar sexo
    let sexo = prompt("Digite seu sexo ('f' para feminino ou 'm' para masculino):").toLowerCase();
    while (sexo !== "f" && sexo !== "m") {
        alert("O sexo deve ser 'f' ou 'm'.");
        sexo = prompt("Digite seu sexo ('f' para feminino ou 'm' para masculino):").toLowerCase();
    }
    pessoaTrabalhadora.sexo = sexo;

    // Validar estado civil
    let estadoCivil = prompt("Digite seu estado civil ('s' para solteiro(a), 'c' para casado(a), 'v' para viúvo(a), 'd' para divorciado(a)):")
        .toLowerCase();
    while (
        estadoCivil !== "s" &&
        estadoCivil !== "c" &&
        estadoCivil !== "v" &&
        estadoCivil !== "d"
    ) {
        alert("O estado civil deve ser 's', 'c', 'v' ou 'd'.");
        estadoCivil = prompt("Digite seu estado civil ('s', 'c', 'v', 'd'):")
            .toLowerCase();
    }
    pessoaTrabalhadora.estadoCivil = estadoCivil;

    // Exibir os dados validados
    console.log("Informações validadas:", pessoaTrabalhadora);
    alert(`Informações validadas: 
    Nome: ${pessoaTrabalhadora.nome}
    Idade: ${pessoaTrabalhadora.idade}
    Salário: R$${pessoaTrabalhadora.salario.toFixed(2)}
    Sexo: ${pessoaTrabalhadora.sexo === "f" ? "Feminino" : "Masculino"}
    Estado Civil: ${estadoCivil.toUpperCase()}`);
}

Validar();