alert("Descubra a soma e a média aritmética de 10 valores digitados pelo usuário")

let soma = 0
let contador = 1
let valor
let media
while (contador <= 10) {
    valor = parseInt(prompt("Digite o valor " + contador + "º : "))
    soma = soma + valor
    contador = contador + 1
}
media = soma / 10

alert("Soma total : " + soma + " Média aritmética : " + media)