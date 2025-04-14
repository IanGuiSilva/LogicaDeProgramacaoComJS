alert("Calcule o salario total com comissões")

let salario = parseInt(prompt("Qual o salario fixo : "))
let vendas = parseInt(prompt("Qual o valor total de vendas : "))
let vendasAcima
let vendasAbaixo
let salarioTotal
if (vendas > 1500) {
    vendasAcima = (vendas - 1500) * 5 / 100
    vendasAbaixo = 1500 * 3 / 100
    salarioTotal = salario + vendasAcima + vendasAbaixo
} else {
    salarioTotal = salario + (vendas * 3 / 100)
}

alert("O seu salario total e de R$ " + salarioTotal)