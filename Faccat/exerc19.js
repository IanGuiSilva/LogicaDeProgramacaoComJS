alert("Descubra o peso ideal")

let nome = prompt("Qual é o seu nome? : ")
let sexo = prompt("Qual é o seu sexo? (M/F) : ")
let altura = parseFloat(prompt("Qual é a sua altura em metros? : "))
let pesoIdeal
if (sexo = "M") {
     pesoIdeal = 72.7 * altura - 58
} else {
    pesoIdeal = 62.1 * altura - 44.7
}

alert("O seu peso ideal é: " + pesoIdeal.toFixed(2) + "kg")