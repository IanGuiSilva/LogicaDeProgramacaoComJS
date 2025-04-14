alert("Veja a tabuada de um número digitado pelo usuário usando laço 'repita'")

let valor
let numero = parseInt(prompt("Digite um número : "))

valor = 1
do {
    alert(numero + " x " + valor + " = " + (numero * valor))
    valor++
} while (valor <= 10)
