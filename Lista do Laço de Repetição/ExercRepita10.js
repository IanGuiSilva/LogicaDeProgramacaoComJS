alert("Digite a senha correta para acessar (dica: 1234)")

let senha

do {
    senha = parseInt(prompt("Digite a senha só de números:"))
} while (senha !== 1234)

alert("Acesso permitido.")