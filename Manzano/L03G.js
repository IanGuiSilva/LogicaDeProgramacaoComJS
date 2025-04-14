alert("Descubra a sequência de Fibonacci até o 15º termo")

let termoA = 1
let termoB = 1
let contador = 3
let proximo
alert("Termo 1 : " + termoA)
alert("Termo 2 : " + termoB)
while (contador <= 15) {
    proximo = termoA + termoB
    alert("Termo " + contador + " : " + proximo)
    termoA = termoB
    termoB = proximo
    contador = contador + 1
}

