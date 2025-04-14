alert("Descubra o quociente de uma divisão inteira utilizando subtrações sucessivas")

let dividendo = parseInt(prompt("Digite o valor do dividendo:"))
let divisor = parseInt(prompt("Digite o valor do divisor:"))
let quociente = 0

if (divisor == 0) {
    alert("O divisor não pode ser zero!")
} else {
    while (dividendo >= divisor) {
        dividendo = dividendo - divisor
        quociente = quociente + 1
    }
    alert("O quociente da divisão é: " + quociente)
}