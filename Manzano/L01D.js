alert("Saiba a quantidade de litros de combustível gasta em uma viagem")

let hora = parseInt(prompt("Digite o tempo gasto na viagem (em horas) : "))
let velocidade = parseFloat(prompt("Digite a velocidade média da viagem (em km/h) : "))
let distancia = velocidade * hora
let litros = distancia / 12

alert("A velocidade media da viagem foi de " + velocidade + " km/h")
alert("A distancia percorrida foi de " + distancia + " km")
alert("O tempo gasto na viagem foi de " + hora + " horas")
alert("A quantidade de litros de combustível gasta em uma viagem é: " + litros)
