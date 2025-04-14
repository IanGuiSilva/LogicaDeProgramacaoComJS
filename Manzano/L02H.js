alert("Digite 5 números e encontre o maior e o menor entre eles")


let numero = 1
let maior = numero
let menor = numero

for (proximo = 1 ;proximo <= 5; proximo++) {
    numero = parseInt(prompt('Digite o ' + proximo + 'º número : '))
    if (numero > maior) {
        maior = numero
    } else if (numero < menor) {
        menor = numero
    }
}

alert("Maior número : " + maior + ", e menor número: " + menor)