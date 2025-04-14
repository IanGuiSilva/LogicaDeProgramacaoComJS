alert("Total de horas de um jogo de xadres")

let comeco = parseInt(prompt("Digite as horas do inicio da partida : "))
let fim = parseInt(prompt("Digite as horas do fim da partida : "))
let tempoJogo
if (fim >= comeco) {
    tempoJogo = fim - comeco
} else {
    tempoJogo = (24 - comeco) + fim
}

alert("A partida durou : " + tempoJogo + " horas")