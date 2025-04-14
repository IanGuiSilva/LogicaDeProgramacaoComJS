alert("Saiba o valor em dólares a partir da cotação do dólar e da quantidade de reais disponíveis")

let cotacao = parseInt(prompt("Digite o valor da cotação atual do dólar : "))
let quantidadeReais = parseInt(prompt("Digite a quantidade de reais disponíveis : "))
let valorDolar = cotacao / quantidadeReais

alert("O valor em dólares é: US$" + valorDolar)