alert("Calcule a média de quatro notas e informa se o aluno foi aprovado ou reprovado")

let nota1 = parseInt(prompt("Digite a primeira nota : "))
let nota2 = parseInt(prompt("Digite a segunda nota : "))
let nota3 = parseInt(prompt("Digite a terceira nota : "))
let nota4 = parseInt(prompt("Digite a quarta nota : "))
let media = (nota1 + nota2 + nota3 + nota4) / 4

alert("Média do aluno : " + media)

if (media >= 5) {
    alert("Aluno aprovado!")
} else {
    alert("Aluno reprovado!")
}

