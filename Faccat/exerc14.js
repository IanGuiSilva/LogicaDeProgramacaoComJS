alert("Verificação se você pode ou não votar")

let anoAtual = parseInt(prompt("Digite o ano atual : "))
let anoNascimento = parseInt(prompt("Digite o seu ano de nascimento : "))
let idade = anoAtual - anoNascimento
if (idade >= 16) {
    alert("Você pode votar")
} else {
    alert("Você não pode votar")
}