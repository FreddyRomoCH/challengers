/*
 * Crea una función que transforme grados Celsius en Fahrenheit
 * y viceversa.
 *
 * - Para que un dato de entrada sea correcto debe poseer un símbolo "°"
 *   y su unidad ("C" o "F").
 * - En caso contrario retornará un error.
 */

function temperatureConverter(temperature){
    if (!temperature.includes("°") && !(temperature.includes('C') || temperature.includes('F'))){
        return "Error";
    }

    let temperatureNumber = parseInt(temperature.replace(/\D/g, ''))

    if (temperature.includes("C")) {
        return temperatureNumber * 9 / 5 + 32 + "°F"
    } else if (temperature.includes("F")) {
        return Math.floor((temperatureNumber - 32) * 5 / 9) + "°C"
    } else {
        return "Error"
    }

}

console.log(temperatureConverter("40°C"))