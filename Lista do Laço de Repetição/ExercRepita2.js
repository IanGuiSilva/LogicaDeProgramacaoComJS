alert("Veja contagem regressiva a partir de um número digitado pelo usuário")

let numero = parseInt(prompt("Digite um numero para fazer uma contagem regressiva"))
do {
    alert(numero)
    numero = numero - 1
} while (numero > 0)