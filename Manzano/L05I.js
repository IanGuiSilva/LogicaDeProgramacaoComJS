alert("Veja a Série de Fibonacci até o 15º termo")

let anterior = 0
let atual = 1
let valor

alert("Série de Fibonacci até o 15º termo : ")

for (valor = 0; valor < 15; valor++) {
    alert(atual)
    proximo = anterior + atual
    anterior = atual
    atual = proximo
}