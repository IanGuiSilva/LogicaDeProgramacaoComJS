alert("Digite três valores para saber se eles formam um triângulo")

let numero1 = parseInt(prompt("Digite o lado A do triângulo : "))
let numero2 = parseInt(prompt("Digite o lado B do triângulo : "))
let numero3 = parseInt(prompt("Digite o lado C do triângulo : "))
if (numero1 + numero2 > numero3 && numero1 + numero3 > numero2 && numero2 + numero3 > numero1) {
    alert("Os lados formam um triângulo")
} else {
    alert("Os lados não formam um triângulo")
}