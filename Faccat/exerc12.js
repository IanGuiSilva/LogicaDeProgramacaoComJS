alert("Loja de maçãs onde acima de ou igual a 12 custarão R$ 1,00 cada e menos que 12 custarão R$ 1,30 cada")

let maca = parseInt(prompt("Digite quantas maçãs você deseja comprar : "))
let precoMaca 
if (maca >= 12) {
    precoMaca = maca * 1 
} else {
    precoMaca = maca * 1.30 
}

alert("O custo final é de : R$ " + precoMaca)

