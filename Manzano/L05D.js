alert("Veja a soma dos números pares de 1 até 500")

let soma = 0
let valor
for (valor = 1; valor <= 500; valor++) {
    if (valor % 2 == 0) {
        soma = soma + valor
    }
}

alert("A soma dos números pares de 1 até 500 é : " + soma)