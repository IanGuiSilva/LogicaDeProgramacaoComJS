alert("Saiba os números divisíveis por 4 entre 1 e 200")

let contador = 1
do {
    if (contador % 4 == 0) {
        alert(contador)
    }
    contador = contador + 1
} while (contador <= 200)