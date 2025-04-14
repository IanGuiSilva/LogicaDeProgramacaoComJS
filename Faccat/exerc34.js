alert("Digite o código de usuário")

let codigoUsuario = parseInt(prompt("Digite o código do usuário : "))
let senha
if (codigoUsuario !== 1234) {
    alert("Código de usuário inválido")
} else {
    senha = prompt("Digite a senha do usuário : ")

    if (senha == "1234") {
        alert("Acesso autorizado")
    } else {
        alert("Senha inválida")
    }
}