alert("Saiba o total da soma obtida dos cem primeiros números inteiros")

let numero = 1
let soma = 0
while (numero <= 100) {
    soma = soma + numero
    numero = numero + 1
}

alert("A soma dos 100 primeiros números inteiros é : " + soma)