alert("salário total do funcionário com horas extras")

let horas = parseInt(prompt("Quantas horas você trabalhou : "))
let salarioHora = parseFloat(prompt("Qual é o seu salário por hora : "))
let horasExtras
let salarioHoraExtra
let salarioTotal
if (horas > 160) {
    horasExtras = horas - 160
    salarioHoraExtra = salarioHora * 1.5
    salarioTotal = (salarioHoraExtra * horasExtras) + (salarioHora * 160)
} else {
    salarioTotal = salarioHora * horas
}

alert("O seu salario total é de : R$" + salarioTotal) 
