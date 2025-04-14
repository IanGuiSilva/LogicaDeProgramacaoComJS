alert("Descubra o maior e o menor valor entre os números positivos informados")

let valor
let maior
let menor
let primeiro = true

do {
    valor = parseInt(prompt("Digite um valor inteiro positivo (ou negativo para sair):"))

    if (valor >= 0) {
        if (primeiro) {
            maior = valor
            menor = valor
            primeiro = false;
        } else {
            if (valor > maior) {
                maior = valor
            }
            if (valor < menor) {
                menor = valor
            }
        }
    }

} while (valor >= 0)

if (!primeiro) {
    alert("Maior valor informado: " + maior)
    alert("Menor valor informado: " + menor)
} else {
    alert("Nenhum valor positivo foi informado.")
}