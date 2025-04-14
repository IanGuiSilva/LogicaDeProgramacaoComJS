alert("Saiba a potência de um número (base elevado a um expoente)")

let base = parseInt(prompt("Digite a base : "))
let expoente = parseInt(prompt("Digite o expoente : "))
let resultado = 1
let contador = 1
while (contador <= expoente) {
    resultado = resultado * base
    contador = contador + 1
}

alert(base + " elevado a " + expoente + " é igual a " + resultado)