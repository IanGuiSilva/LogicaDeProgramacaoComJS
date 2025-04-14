alert("Descubra o fatorial de números ímpares de 1 até 10")

let numero = 1
let fatorial
let valor
do {
    if (numero % 2 !== 0) {
        fatorial = 1
        valor = numero
        do {
            fatorial = fatorial * valor
            valor = valor - 1
        } while (valor > 0)
        alert('O fatorial de ' + numero + ' é : ' + fatorial)
    }
    numero = numero + 1
} while (numero <= 10)

