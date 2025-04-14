alert("Veja todos os números múltiplos de 4 no intervalo de 1 até 199")

let numero
for (numero = 1; numero <= 199; numero++) {
    if (numero % 4 == 0) {
        alert(numero)
    }
}