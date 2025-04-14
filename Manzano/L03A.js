alert("Cálcule a quantidade de litros de combustível gasta em uma viagem, utilizando um automóvel que faz 12 Km por litro")

let numero = parseInt(prompt("Digite um número para ver sua tabuada : "))
let resultado
let quantidade = 1
while (quantidade <= 10) {
    resultado = numero * quantidade
    alert(numero + " x " + quantidade + " = " + resultado)
    quantidade++
}
