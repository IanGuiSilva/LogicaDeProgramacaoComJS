alert("Calcule a diferença entre dois números, sendo a diferença do maior pelo menor")

let valorA = parseInt(prompt("Digite o primeiro valor : "))
let valorB = parseInt(prompt("Digite o segundo valor : "))
let diferenca
if (valorA > valorB) {
    diferenca = valorA - valorB
} else {
    diferenca = valorB - valorA
}

alert("A diferença do maior pelo menor é : ")