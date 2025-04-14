alert("Digite o nome de dois times e seus respectivos gols para saber o vencedor")

let time1 = prompt("Digite o nome do primeiro time : ")
let gols1 = parseInt(prompt("Digite o gols do primeiro time : "))
let time2 = prompt("Digite o nome do segundo time : ")
let gols2 = parseInt(prompt("Digite o gols do segundo time : "))
if (gols1 > gols2) {
    alert(time1 + " venceu o jogo!")
} else if (gols2 == gols1) {
    alert("O jogo terminou empatado!")
} else {
    alert(time2 + " venceu o jogo!")
} 