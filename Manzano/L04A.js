alert("Descubra o quadrado de números inteiros a partir de 15 até o número maior que 200")

let numero = 15
let qNumero
do {
    qNumero = numero * numero
    alert(numero + "² = " + qNumero)
    numero = numero + 1
} while (numero <= 200)