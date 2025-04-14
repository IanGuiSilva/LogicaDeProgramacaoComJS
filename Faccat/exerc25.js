alert("Digite três números diferentes para calcular a soma dos dois maiores")

let numero1 = parseInt(prompt("Digite o primeiro numero : "))
let numero2 = parseInt(prompt("Digite o segundo numero : "))
let numero3 = parseInt(prompt("Digite o terceiro numero : "))
let soma
if (numero1 <= numero2 && numero1 <= numero3) {
    soma = numero2 + numero3
} else if (numero2 <= numero1 && numero2 <= numero3) {
    soma = numero1 + numero3
} else {
    soma = numero1 + numero2
}
alert("A soma dos maiores numeros é : " + soma)
