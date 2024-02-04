function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFatorial(numero - 1);
    }
}

let numero = prompt("Digite um número para calcular o fatorial:");

if (isNaN(numero)) {
    console.log("Por favor, digite um número válido.");
} else {
    
    let fatorial = calcularFatorial(numero);
    alert(`O fatorial de ${numero} é = ${fatorial}`)
    console.log(`O fatorial de ${numero} é = ${fatorial}`);
}
