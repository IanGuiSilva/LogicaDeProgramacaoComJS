alert("Descubra as potências de 3, de 3^0 até 3^15")

let valor1
let valor2
let resultado
for (valor1 = 0; valor1 <= 15; valor1++) {
    resultado = 1
    for (valor2 = 0; valor2 <= valor1; valor2++) {
        resultado = resultado * 3
    }

    alert("3^" + valor1 + " = " + resultado)
}