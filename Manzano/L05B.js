alert("Veja a tabuada de um número fornecido pelo usuário")

let numero = parseInt(prompt("Digite o número para ver a tabuada : "))
let contador
let resultado
for (contador = 1; contador <= 10; contador++) {
    resultado = numero * contador
    alert(numero + " x " + contador + " = " + resultado)
}
