alert("Veja as potências de 3, do expoente 0 até o expoente 15")

let expoente = 0
let resultado
let contador

while (expoente <= 15) {
    resultado = 1
    contador = 1

    while (contador <= expoente) {
        resultado = resultado * 3
        contador = contador + 1
    }

    alert("3 elevado a " + expoente + " = " + resultado)
    expoente = expoente + 1
}