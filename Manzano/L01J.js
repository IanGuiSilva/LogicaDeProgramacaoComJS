alert("Saiba o valor em reais a partir da cotação do dólar")

let cotacao = parseInt(prompt("Digite o valor da cotação atual do dólar : "))
let quantidadeDolar = parseInt(prompt("Digite a quantidade de dólares disponíveis : "))
let valorReais = cotacao * quantidadeDolar

alert("O valor em reais é : R$" + valorReais)