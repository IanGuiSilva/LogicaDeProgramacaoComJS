alert("Veja as notas de 0 a 10 com 'repita' e calcula a média das válidas")

let soma = 0
let contador = 0
let nota
let media

do {
    nota = parseInt(prompt("Digite a nota : "))
    if (nota >= 0 && nota <= 10) {
        soma = soma + nota
        contador = contador + 1
    }
} while (nota != 0 && nota != 10)

if (contador > 0) {
    alert(media = soma / contador)
} else {
    alert("Nenhuma nota válida foi digitada")
}


