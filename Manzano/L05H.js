alert("Descubra a potência de um número dado uma base e um expoente")

let base = parseInt(prompt("Insira a base:"))
let expoente = parseInt(prompt("Insira o expoente:"))
let resultado = 1
let valor
for (valor = 0; valor < expoente; valor++) {
    resultado = resultado * base
}

alert(base + " elevado a " + expoente + " é igual a " + resultado)