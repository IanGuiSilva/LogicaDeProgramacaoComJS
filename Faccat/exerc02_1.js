alert("Área do hexágono")

let numero = parseInt(prompt("Digite o numero de um dos lados: "))
let area = (3 * Math.sqrt(3) * (Math.pow(numero,2))) / 2

alert("A area de hexágono com lados de valor " + numero +"m é de: " + area + "m")