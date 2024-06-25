/*
 * Lee el fichero "Challenge21.txt" incluido en el proyecto, calcula su
 * resultado e imprímelo.
 * - El .txt se corresponde con las entradas de una calculadora.
 * - Cada línea tendrá un número o una operación representada por un
 *   símbolo (alternando ambos).
 * - Soporta números enteros y decimales.
 * - Soporta las operaciones suma "+", resta "-", multiplicación "*"
 *   y división "/".
 * - El resultado se muestra al finalizar la lectura de la última
 *   línea (si el .txt es correcto).
 * - Si el formato del .txt no es correcto, se indicará que no se han
 *   podido resolver las operaciones.
 */


// Read the file "Challenge21.txt" and calculate the result
const fs = require('fs')

function initCalculator() {
    fs.readFile('Challenge21.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error reading file:', err)
            return
        }
        console.log(calculator(data))
    })
}

function calculator(data) {
    const lines = data.split('\n') // split('\n') Splits data into lines
    let result = 0
    let operation = null

    for (let line of lines) {
        if (isFinite(parseFloat(line))) {
            switch (operation) {
                case '+':
                    result += parseFloat(line)
                    break
                case '-':
                    result -= parseFloat(line)
                    break
                case '*':
                    result *= parseFloat(line)
                    break
                case '/':
                    if (parseFloat(line) !== 0) {
                        result /= parseFloat(line)
                    }else{
                        console.log('Error division by zero')
                        return
                    }
                    break
                default:
                    result = parseFloat(line)
                    break
            }
            
        }else{
            operation = line.trim()
        }
    }

    return result
}

initCalculator()