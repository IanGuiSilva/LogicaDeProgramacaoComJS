alert("Descubra o maior e o menor valor dentre os valores informados pelo usuário")

let contador = 0
let maior
let menor
let valor = parseInt(prompt("Digite valores inteiros positivos (digite um valor negativo para sair):"))
while (valor >= 0) {
    if (contador === 0) {
        maior = valor
        menor = valor
    } else {
        if (valor > maior) {
            maior = valor
        } else if (valor < menor) {
            menor = valor
        }
    }
    contador = contador + 1
    valor = parseInt(prompt("Digite valores inteiros positivos (digite um valor negativo para sair):"))
}
if (contador === 0) {
    alert("Nenhum valor positivo foi digitado.")
} else {
    alert("O maior valor é " + maior + ", o menor valor é " + menor + ", e foram digitados " + contador + " valores.")
}