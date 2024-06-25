/*
 * Crea una función que calcule el valor del parámetro perdido
 * correspondiente a la ley de Ohm.
 * - Enviaremos a la función 2 de los 3 parámetros (V, R, I), y retornará
 *   el valor del tercero (redondeado a 2 decimales).
 * - Si los parámetros son incorrectos o insuficientes, la función retornará
 *   la cadena de texto "Invalid values".
 */

function ohmsLaw(v, r, i) {

    if (typeof v === 'undefined') {
        if (typeof r === 'number' && typeof i === 'number') {
            return (r * i).toFixed(2);
        }
    } else if (typeof r === 'undefined') {
        if (typeof v === 'number' && typeof i === 'number') {
            return (v / i).toFixed(2)
        }
    } else if (typeof i === 'undefined') {
        if (typeof v === 'number' && typeof r === 'number') {
            return (v / r).toFixed(2)
        }
    }
    
}

console.log(ohmsLaw(undefined, 12, 220)); // "2640.00"
console.log(ohmsLaw(2640, 12, undefined)); // "220.00"
console.log(ohmsLaw(2640, undefined, 220)); // "12.00"