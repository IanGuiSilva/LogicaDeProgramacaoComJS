alert("Digite dois valores para saber qual e o valor de z")

let valorX = parseInt(prompt("Digite o valor de X : "))
let valorY = parseInt(prompt("Digite o valor de Y : "))
let valorZ = valorX * valorY + 5
if (valorZ <= 0) {
    alert("O valor de Z é : " + valorZ + " então sua clasificação é A")
} else if (valorZ <= 100) {
    alert("O valor de Z é : " + valorZ + " então sua clasificação é B")
} else {
    alert("O valor de Z é : " + valorZ + " então sua clasificação é C")
}
