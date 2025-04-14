alert("Saiba a soma de todos os números pares entre 2 e 500")

let contador = 1
let pares = 0
do {
    if (contador % 2 == 0) {
        pares = contador + pares
    }
    contador = contador + 1
} while (contador > 500)

alert("Soma dos pares : " + pares)