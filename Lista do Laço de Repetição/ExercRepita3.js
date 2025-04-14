alert("Veja soma números positivos digitados até que um dos dois números lidos seja negativo")

let soma = 0
let numero1
let numero2
do {
    numero1 = parseInt(prompt("Digite o primeiro número : "))
    numero2 = parseInt(prompt("Digite o segundo número : "))
    if (numero1 >= 0) {
        soma = soma + numero1
    }
    if (numero2 >= 0) {
        soma = soma + numero2
    }
} while (numero1 >= 0 && numero2 >= 0)

alert(soma)