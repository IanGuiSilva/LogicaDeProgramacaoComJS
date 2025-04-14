alert("Digite três números diferentes para saber qual é o maior deles")

let numero1 = parseInt(prompt("Digite o primerio número : "))
let numero2 = parseInt(prompt("Digite o segundo número : "))
let numero3 = parseInt(prompt("Digite o terceiro número : "))
if (numero1 > numero2 && numero1 > numero3) {
    alert("O maior número é o primeiro número")
} else if (numero2 > numero1 && numero2 > numero3) {
    alert("O maior número é o segundo número")
} else {
    alert("O maior número é o terceiro número")
}