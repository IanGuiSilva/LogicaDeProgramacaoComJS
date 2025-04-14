alert("Digite três números para organizalos em ordem crescente")

let numero1 = parseInt(prompt("Digite o primeiro número : "))
let numero2 = parseInt(prompt("Digite o segundo número : "))
let numero3 = parseInt(prompt("Digite o terceiro número : "))
let maior
if (numero1 > numero2) {
    maior = numero1
    numero1 = numero2
    numero2 = maior
}

if (numero1 > numero3) {
    maior = numero1
    numero1 = numero3
    numero3 = maior
}

if (numero2 > numero3) {
    maior = numero2
    numero2 = numero3
    numero3 = maior
}


alert("Valores em ordem crescente : " + numero1 + " " + numero2 + " " + numero3)