alert("Digite letras uma por uma. Digite '.' (ponto) para encerrar.")

let letra
let cont = 0

do {
    letra = prompt("Letra:").toLowerCase()
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        cont = cont + 1
    }
} while (letra !== ".")

alert("Quantidade de vogais digitadas: " + cont)