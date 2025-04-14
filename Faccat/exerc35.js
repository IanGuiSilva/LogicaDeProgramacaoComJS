alert("Calcule o preço total do produto")

let produto = prompt("Escreva o nome do produto : ")
let quantidade = parseInt(prompt("Digite a quantidade do produto : "))
let preco = parseInt(prompt("Escreva o preço do produto : "))
let total = preco * quantidade
let totalPagar
if (quantidade <= 5) {
    totalPagar = total - (total * 2 / 100)
} else if (quantidade <= 10) {
    totalPagar = total - (total * 3 / 100)
} else {
    totalPagar = total - (total * 5 / 100)
}

alert(produto + " R$" + totalPagar)
