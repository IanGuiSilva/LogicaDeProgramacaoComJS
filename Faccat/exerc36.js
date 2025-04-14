alert("Calcule sua media de aproveitamento")

let nota1 = parseInt(prompt("Digite sua primeira nota : "))
let nota2 = parseInt(prompt("Digite sua segunda nota : "))
let nota3 = parseInt(prompt("Digite sua terceira nota : "))
let mediaExercicios = parseInt(prompt("Digite a media de exercicios feitos : "))
let mediaAproveitamento = nota1 + (nota2 * 2) + (nota3 * 3) + mediaExercicios / 7
if (mediaAproveitamento >= 9) {
    alert("Você tirou A")
} else if (mediaAproveitamento >= 7.5) {
    alert("Você tirou B")
} else if (mediaAproveitamento >= 6) {
    alert("Você tirou C")
} else {
    alert("Você tirou D")
}
