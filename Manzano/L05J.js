alert("Veja a conversão de temperaturas de Celsius para Fahrenheit em intervalos de 10°C")

let celsius
let fahrenheit

alert("Conversão de Celsius para Fahrenheit : ")
for (celsius = 0; celsius <= 100; celsius += 10) {
    fahrenheit = (9 * celsius + 160) / 5
    alert(celsius + "°C é igual a " + fahrenheit + "°F")
}
