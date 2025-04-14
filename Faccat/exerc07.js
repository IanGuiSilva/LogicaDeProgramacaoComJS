alert("Salario final de um vendedor")

let carrosVendidos = parseInt(prompt("Digite o numero de carros vendidos : "))
let totalVendas = parseInt(prompt("Digite o total de vendas feitas : "))
let salarioFixo = parseInt(prompt("Digite o salario fixo : "))
let comissaoCarro = parseInt(prompt("Digite o a comisao fixa de cada carro vendido"))
let comisaoTotal = carrosVendidos * comissaoCarro
let bonus = totalVendas * 5 / 100
let salarioFinal = salarioFixo + comisaoTotal + bonus

alert("O salaroi total do vendedor é : R$" + salarioFinal)

