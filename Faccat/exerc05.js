alert("Calcule seu novo salario apos o ajuste percentual")

let salarioAtual = parseInt(prompt("Digite o valor do seu salario atual : "))
let ajustePercentual = parseFloat(prompt("Digite o percentual do ajuste : "))
let salarioNovo = salarioAtual + (salarioAtual * ajustePercentual / 100)

alert("O seu novo salario sera de R$ " + salarioNovo)
