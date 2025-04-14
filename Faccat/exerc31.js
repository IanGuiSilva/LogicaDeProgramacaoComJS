alert("Calcule o valor a ser pago com desconto no combustível")

let litrosVedidos = parseInt(prompt("Digite a quantidade de litros vendidos : "))
let tipoCombustivel = prompt("Digite o tipo de combustível (A para álcool ou G para gasolina) : ")
let precoGasolina = 3.30
let precoAlcool = 2.90
let preco
if (tipoCombustivel == "G") {
    if (litrosVedidos <= 20) {
        preco = litrosVedidos * precoGasolina - (litrosVedidos * precoGasolina * 4 / 100)
    } else {
        preco = litrosVedidos * precoGasolina - (litrosVedidos * precoGasolina * 6 / 100)
    } }else (tipoCombustivel == "A") 
        if (precoAlcool <= 20) {
            preco = litrosVedidos * precoAlcool - (litrosVedidos * precoAlcool * 3 / 100)
        } else {
            preco = litrosVedidos * precoAlcool - (litrosVedidos * precoAlcool * 5 / 100)
        }
    


alert("Valor final a ser pago : R$" + preco) 