alert("Calcule o valor absoluto de um número (positivo ou negativo)")

let numero = parseInt(prompt("Digite um número inteiro (positivo ou negativo) : "))
if (numero < 0) {
    numero = numero * -1
}

alert("O valor absoluto (módulo) é : " + numero)