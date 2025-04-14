alert("Calcule as raízes de uma equação do segundo grau, utilizando a fórmula de Bhaskara")

let valorA = parseInt(prompt("Digite o valor de A : "))
let valorB
let valorC
let delta
let raiz1
let raiz2
if (valorA == 0) {
    alert("Não é possível calcular a raiz de uma equação do segundo grau com A = 0")
} else {
    valorB = parseInt(prompt("Digite o valor de B : "))
    valorC = parseInt(prompt("Digite o valor de C : "))
    delta = (valorB * valorB) - (4 * valorA * valorC)
    if (delta < 0) {
        alert("Não é possível calcular a raiz de uma equação do segundo grau com delta < 0")
    } else if (delta == 0) {
        raiz1 = -valorB / (2 * valorA)
        alert('A raiz da equação é' + raiz1)
    } else {
        raiz1 = (-valorB + Math.sqrt(delta)) / (2 * valorA)
        raiz2 = (-valorB - Math.sqrt(delta)) / (2 * valorA)
        alert('As raízes da equação são ' + raiz1 + ' e ' + raiz2)
    }
}