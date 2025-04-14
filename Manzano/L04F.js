alert("Descubra a soma e a média de valores fornecidos pelo usuário, até que um número negativo seja digitado")

let soma = 0
let total = 0
let media
let numero
do {
    numero = parseInt(prompt(""))
    if (numero >= 0) {
        soma = soma + numero
        total = total + 1
    }
} while (numero >= 0)

if (total > 0) {
    media = soma / total
    alert("O total de valores lidos : " + total)
    alert("A soma dos valores lidos : " + soma)
    alert("A média dos valores lidos : " + media)
} else {
    alert("Nenhum valor positivo foi digitado")
}