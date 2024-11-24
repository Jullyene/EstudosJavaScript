// 2. Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações. 


function dadosUsuario() {
    let nome = prompt("Digite seu nome:");
    let senha = prompt("Digite sua senha:");

    
    while (nome === senha) {
        window.alert("Erro: A senha não pode ser igual ao nome do usuário. Tente novamente.");
        nome = prompt("Digite seu nome:");
        senha = prompt("Digite sua senha:");
    }

    window.alert("Cadastro realizado com sucess!");
}

dadosUsuario();