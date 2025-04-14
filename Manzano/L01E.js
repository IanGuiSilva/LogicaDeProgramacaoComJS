alert("Saiba o valor da prestação em atraso com base nos juros e no tempo")

let valor = parseInt(prompt("Digite o valor da prestação : "))
let taxa = parseInt(prompt("Digite a taxa de juros (%) : "))
let tempo = parseInt(prompt("Digite o tempo de atraso (em meses) : "))
let juros = valor + (valor * taxa / 100) * tempo

alert("O valor da prestação em atraso é : R$" + juros)