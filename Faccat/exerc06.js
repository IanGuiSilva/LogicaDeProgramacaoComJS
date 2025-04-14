alert("Custo final de um carro com acrescimo de 28% para o distribuidor e 45% de impostos.")

let custoFabrica = parseInt(prompt("Digite o custo de fabrica do carro : "))
let custoDistribuidor = custoFabrica * 28 / 100
let custoImposto = custoFabrica * 45 / 100
let custoFinal = custoFabrica + custoDistribuidor + custoImposto

alert("O custo dinal do carro será de : R$" + custoFinal)