alert("Descubra a área total de uma residência, somando as áreas de vários cômodos")

let areaTotal = 0
let nomeComodo
let areaComodo
let larguraComodo
let comprimentoComodo
let resposta
do {
    nomeComodo = prompt("Digite o nome do cômodo : ")
    larguraComodo = parseInt(prompt("Digite a largura do cômodo : "))
    comprimentoComodo = parseInt(prompt("Digite o comprimento do cômodo : "))
    areaComodo = larguraComodo * comprimentoComodo
    areaTotal = areaTotal + areaComodo
    alert('A área do cômodo ' + nomeComodo + ' é : ' + areaComodo)
    resposta = prompt("Deseja continuar? (S/N)")
} while (resposta.toUpperCase() === "S" || resposta.toUpperCase() === "s")

alert("A área total da residência é : " + areaTotal)