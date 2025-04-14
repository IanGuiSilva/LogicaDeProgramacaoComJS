alert("Saiba o somatório dos valores pares existentes na faixa de 1 até 500")

let numero = 2
let soma = 0
while (numero <= 500) {
    soma = soma + numero
    numero = numero + 2
}

alert("A soma dos números pares de 1 até 500 é : " + soma)