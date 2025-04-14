alert("Veja os fatoriais dos números ímpares de 1 até 10");

let numero;
let fatorial;
let valor;

for (numero = 1; numero <= 10; numero += 2) {
    fatorial = 1;
    for (valor = 1; valor <= numero; valor++) {
        fatorial = fatorial * valor;
    }
    alert(numero + " = " + fatorial);
}