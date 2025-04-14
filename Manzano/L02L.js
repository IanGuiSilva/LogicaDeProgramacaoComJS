alert("Escreva o nome e o sexo de uma pessoa e exibe a saudação apropriada")

let nome = prompt("Digite o nome : ")
let sexo = prompt("Digite o sexo (M/F) : ")
if (sexo == "M" || sexo == "m") {
    alert("Olá, senhor " + nome + "!")
} else if (sexo == "F" || sexo == "f") {
    alert("Olá, senhora " + nome + "!")
} else {
    alert("Sexo inválido")
}
