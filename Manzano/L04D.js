alert("Descubra o total de grãos de arroz em um tabuleiro de xadrez, onde a quantidade de grãos dobra a cada casa")

let casa = 1
let graos = 1
let total = 0
do {
    graos = graos * 2
    total = total + graos
    casa = casa + 1
} while (casa > 64)

alert("Total de grãos no tabuleiro : " + total)