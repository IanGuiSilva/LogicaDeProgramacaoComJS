alert("Saiba a soma e a média dos números pares de 50 até 70")

let numero = 50
let soma = 0
let quantidade = 0

while (numero <= 70) {
    soma = soma + numero
    quantidade = quantidade + 1
    numero = numero + 2
}

let media = soma / quantidade

alert("A soma dos números pares de 50 até 70 é: " + soma)
alert("A média dos números pares de 50 até 70 é: " + media)