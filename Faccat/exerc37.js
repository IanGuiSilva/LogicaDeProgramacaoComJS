alert("Saiba se você deve se aposentar ou não")

let numero = parseInt(prompt("Digite o seu codigo do empregado : "))
let idade = parseInt(prompt("Digite a sua idade : "))
let idadeTrabalho = parseInt(prompt("Digite a quantos anos você ingressou na empresa : "))
if (idade >= 65 && idadeTrabalho >= 30 && (idade >= 60 && idadeTrabalho >= 25)) {
    alert("Você deve se aposentar")
} else {
    alert("Você não deve se aposentar")
}