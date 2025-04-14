alert("Vamos dividir dois números!")

let numero1 = parseFloat(prompt("Digite o dividendo:"))
let numero2 = parseFloat(prompt("Digite o divisor:"))

if (numero2 === 0) {
    alert("Não é possível dividir por zero.")
} else {
    let divisao = numero1 / numero2
    alert("O resultado da divisão é: " + divisao)
}