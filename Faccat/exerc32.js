alert("Digite a idade de 2 homens e 2 mulheres para calcular a soma do homem mais velho com a mulher mais nova e O produto do homem mais novo com a mulher mais velha")

let homem1 = parseInt(prompt("Digite a idade do primeiro homem : "))
let homem2 = parseInt(prompt("Digite a idade do segundo homem : "))
let mulher1 = parseInt(prompt("Digite a idade da primeira mulher : "))
let mulher2 = parseInt(prompt("Digite a idade da segunda mulher : "))
let homemMaisVelho 
let mulherMaisNova
let homemMaisNovo
let mulherMaisVelha
let somaIdades 
let produtoIdades 
if (homem1 > homem2) {
    homemMaisVelho = homem1
    homemMaisNovo = homem2
} else {
    homemMaisVelho = homem2
    homemMaisNovo = homem1
}

if (mulher1 > mulher2) {
    mulherMaisVelha = mulher1
    mulherMaisNova = mulher2
} else {
    mulherMaisVelha = mulher2
    mulherMaisNova = mulher1
}

somaIdades = homemMaisVelho + mulherMaisNova
produtoIdades = homemMaisNovo * mulherMaisVelha


alert("A soma do homem mais velho com a mulher mais nova : " + somaIdades + " e o produto do homem mais novo com a mulher mais velha : " + produtoIdades)

