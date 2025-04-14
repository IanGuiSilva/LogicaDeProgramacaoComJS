alert("Descubra o fatorial de um número informado pelo usuário")

let numero1 = parseInt(prompt("Digite um número:"))
let calculoFatorial = 1
let fatorial = 1

do {
    fatorial = fatorial * calculoFatorial
    calculoFatorial = calculoFatorial + 1
} while (calculoFatorial <= numero1)

alert("O fatorial de " + numero1 + " é " + fatorial)