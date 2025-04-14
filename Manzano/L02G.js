alert("Verifique se os números inseridos são divisíveis por 2 e por 3")

let numero = parseInt(prompt("Digite o número: "))
let divisivel
for (divisivel = 1; divisivel <= 4; divisivel++) {
    if (numero % 2 == 0 && numero % 3 == 0) {
        alert("O número é divisível por 2 e por 3")
    } else {
        alert("O número não é divisível por 2 e por 3")
    }
}

