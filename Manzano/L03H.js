alert("Descubra a converção das temperaturas de Celsius para Fahrenheit, começando de 10°C até 100°C")

let celsius = 10
let fahrenheit
while (celsius <= 100) {
    fahrenheit = (9 * celsius + 160) / 5
    alert(celsius + "°C é igual a " + fahrenheit + "°F")
    celsius = celsius + 10
}
