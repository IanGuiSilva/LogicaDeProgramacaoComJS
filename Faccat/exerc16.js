alert("Digite dois numeros para mostralos em ordem crescente")

let numero1 = parseInt(prompt("Digite o primeiro numero : "))
let numero2 = parseInt(prompt("Digite o segundo numero : "))
if (numero1 > numero2) {
    alert("A ordem crescente dos numeros é: " + numero2 + " " + numero1)
} else {
    alert("A ordem crescente dos numeros é: " + numero1 + " " + numero2)
}