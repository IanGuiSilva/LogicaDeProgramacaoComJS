alert("Calcule a média de quatro notas e, se necessário, considera uma nota de exame para decidir se o aluno foi aprovado ou reprovado")

let nota1 = parseInt(prompt("Digite a primeira nota : "))
let nota2 = parseInt(prompt("Digite a segunda nota : "))
let nota3 = parseInt(prompt("Digite a terceira nota : "))
let nota4 = parseInt(prompt("Digite a quarta nota : "))
let media = (nota1 + nota2 + nota3 + nota4) / 4
let exame
let novaMedia

alert("Média : " + media)

if (media >= 7) {
    alert("Aluno aprovado")
} else {
    exame = parseInt(prompt("Digite a nota do exame : "))
    novaMedia = (media + exame) / 2
    alert("Média final : " + novaMedia)
    if (novaMedia >= 5) {
        alert("Aluno aprovado")
    } else {
        alert("Aluno reprovado")
    }
}

