alert("Digite dois números para saber qual é maior ou se são iguais")

let numero1 = parseInt(prompt("Digite o primeiro número : "))
let numero2 = parseInt(prompt("Digite o segundo número : "))
if (numero1 > numero2) {
    alert("O primeiro número é maior")
} else if (numero1 == numero2) {
    alert("Os números são iguais")
} else {
    alert("O segundo número é maior")
} 