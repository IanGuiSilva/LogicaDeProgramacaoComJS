alert("Digite três números diferentes para exibi-los em ordem crescente")

let numero1 = parseInt(prompt("Digite o primerio número : "))
let numero2 = parseInt(prompt("Digite o segundo número : "))
let numero3 = parseInt(prompt("Digite o terceiro número : "))
if (numero1 <= numero2 && numero1 <= numero3) {
    if (numero2 <= numero3) {
        alert("Os números em ordem crescente são : " + numero1 + " " + numero2 + " " + numero3)
    } else {
        alert("Os números em ordem crescente são : " + numero1 + " " + numero3 + " " + numero2)
    }
} else if (numero2 <= numero1 && numero2 <= numero3) {
        if (numero1 <= numero3) {
            alert("Os números em ordem crescente são : " + numero2 + " " + numero1 + " " + numero3)
        } else {
            alert("Os números em ordem crescente são : " + numero2 + " " + numero3 + " " + numero1)
        }
    } else {
        if (numero1 <= numero2) {
            alert("Os números em ordem crescente são : " + numero3 + " " + numero1 + " " + numero2)
        } else {
            alert("Os números em ordem crescente são : " + numero3 + " " + numero2 + " " + numero1)
        }
    }

