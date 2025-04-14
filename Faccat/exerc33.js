alert("Digite a quantidade (em Kg) de morangos e de maçãs para saber o valor")

let morangos = parseInt(prompt("Quantidade de morangos (em Kg) : "))
let maças = parseInt(prompt("Quantidade de maças (em Kg) : "))
let precoMaca
let precoMorango
let total
let totalKg
if (morangos <= 5) {
    precoMorango = morangos * 2.50
} else {
    precoMorango = morangos * 2.20
}

if (maças <= 5) {
    precoMaca = maças * 1.80
} else {
    precoMaca = maças * 1.50
}

total = precoMorango + precoMaca
totalKg = morangos + maças

if (totalKg > 8 && total > 25) {
    total = total - (total * 10 / 100)
}

alert("Valor a ser pago : R$" + total)