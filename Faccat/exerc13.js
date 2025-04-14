alert("Calcule sua media para saber se você foi aprovado ou não")

let nota1 = parseInt(prompt("Digite sua primeira nota : "))
let nota2 = parseInt(prompt("Digite sua segunda nota : "))
let media = (nota1 + nota2) / 2
if (media >= 6) {
    alert("Você foi aprovado!")
} else {
    alert("Você foi reprovado")
}
