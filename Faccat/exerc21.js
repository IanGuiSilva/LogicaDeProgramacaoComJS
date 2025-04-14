alert("Calcule o saldo atual da conta bancária")

let numeroConta = parseInt(prompt("Digite o número da sua conta : "))
let saldo = parseInt(prompt("Qual o seu saldo : "))
let debito = parseInt(prompt("Qual o seu débito : "))
let credito = parseInt(prompt("Qual o seu crédito : "))
let saldoAtual = saldo - debito + credito
if (saldoAtual >= 0) {
    alert("O saldo atual da conta bancária é : R$" + saldoAtual + " e você tem saldo positivo")
} else {
    alert("O saldo atual da conta bancária é : R$" + saldoAtual + " e você tem saldo negativo")
}