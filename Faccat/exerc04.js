alert("Calcule o percentual de votos brancos, nulos e validos em relação ao numero de eleitores")

let totalELeitores = parseInt(prompt("Digite o numero total de eleitores : "))
let votosBrancos = parseInt(prompt("Digite o numero de votos brancos : "))
let votosNulos = parseInt(prompt("Digite o numero de votos nulos : "))
let votosValidos = parseInt(prompt("Digite o numero de votos validos : "))
let percentualBrancos = (votosBrancos * 100) / totalELeitores
let percentualNulos = (votosNulos * 100) / totalELeitores
let percentualValidos = (votosValidos * 100) / totalELeitores

alert("O numero de votos foi de : " + percentualBrancos + "% votos brancos, " + percentualNulos + "% votos nulos e " + percentualValidos + "% votos validos.")