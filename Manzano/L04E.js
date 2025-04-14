alert("Descubra a soma dos fatoriais de 15 números fornecidos pelo usuário")

let somaFatoriais = 0
let numero
let fatorial
let valor1 = 1
let valor2
do {
    numero = parseInt(prompt("Digite o " + valor1 + "º número : "))

    fatorial = 1
    valor2 = 1

    do {
        fatorial = fatorial * valor2
        valor2 = valor2 + 1
    } while (valor2 <= numero)

    somaFatoriais = somaFatoriais + fatorial
    valor1 = valor1 + 1
} while (valor1 <= 15)

alert("Soma dos fatoriais : " + somaFatoriais)
