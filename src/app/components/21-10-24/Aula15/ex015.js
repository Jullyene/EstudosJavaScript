// 15. A série de Fibonacci é formada pela sequência 1,1,2,3,5,8,13,21,34,55,... Faça um programa capaz de gerar a série até o n−ésimo termo.

function gerarFibonacci() {
    let n = parseInt(prompt("Digite o número de termos da sequência de Fibonacci:"));
    
    let a = 1, b = 1;
    
    
    console.log(a);
    if (n > 1) {
        console.log(b);
    }
    
    for (let i = 3; i <= n; i++) {
        let c = a + b; 
        console.log(c); 
        a = b; 
        b = c; 
    }
}

gerarFibonacci();