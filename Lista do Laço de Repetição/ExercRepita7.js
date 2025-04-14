alert("Tente entrar na conta do usuário acertando o número")

let numero = 4
do {
    tentativa = parseInt(prompt("Tente adivinhar o número (1 a 10) : "))
} while (tentativa != numero)

alert("Você acertou.")