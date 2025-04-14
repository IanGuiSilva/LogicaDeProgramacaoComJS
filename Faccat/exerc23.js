alert("Descubra se um numero é positivo, negativo ou igual a 0")

let numero = parseInt(prompt("Digite um numero"))
if (numero > 0) {
    alert("O numero é positivo")
} else if (numero == 0) {
    alert("O numero é igual a 0")
} else {
    alert("O numero é negativo")
}