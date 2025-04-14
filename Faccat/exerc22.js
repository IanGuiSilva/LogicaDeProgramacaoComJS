alert("Descubra a quantidade em estoque para saber se deve comprar mais")

let quantidadeAtual = parseInt(prompt("Digite a quantidade de produtos no estoque : "))
let quantidadeMinima = parseInt(prompt("Qual a quantidade minima de produtos no estoque : "))
let quantidadeMaxima = parseInt(prompt("Qual a quantidade maxima de produtos no estoque : "))
let quantidadeMedia = (quantidadeMinima + quantidadeMaxima) / 2
if (quantidadeAtual >= quantidadeMedia) {
    alert("A quantidade de produtos no estoque está dentro do intervalo recomendado")
} else {
    alert("A quantidade de produtos no estoque está fora do intervalo recomendado")
}