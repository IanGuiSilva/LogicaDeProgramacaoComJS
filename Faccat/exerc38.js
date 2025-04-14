alert("Verificador de tipo de triângulo")

let ladoA = parseInt(prompt("Digite o valor de A : "))
let ladoB = parseInt(prompt("Digite o valor de B : "))
let ladoC = parseInt(prompt("Digite o valor de C : "))
let tipo
if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
    if (ladoA == ladoB && ladoB == ladoC) {
        tipo = "Triângulo Equilátero"
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
        tipo = "Triângulo Isósceles"
    } else {
        tipo = "Triângulo Escaleno"
    }
} else {
    tipo = "Não é possivel formar um triângulo"
}

alert("Resultado : " + tipo)
