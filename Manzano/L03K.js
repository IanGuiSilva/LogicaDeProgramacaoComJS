alert("Saiba a área total de uma residência, somando as áreas de diferentes cômodos")

let areaTotal = 0
let resposta
let nomeComodo
let areaComodo
while (resposta !== 'N' && resposta !== 'n') {
    nomeComodo = prompt("Escreva o nome do cômodo : ")
    largura = parseInt(prompt("Escreva a largura do cômodo : "))
    comprimento = parseInt(prompt("Escreva a comprimento do cômodo : "))
    areaComodo = largura * comprimento
    alert("Àrea do " + nomeComodo + " é " + areaComodo + "m²")
    areaTotal = areaComodo + areaTotal
    resposta = prompt("Deseja continuar? (S/N)")
}

alert("A área total da residência é " + areaTotal + "m²")