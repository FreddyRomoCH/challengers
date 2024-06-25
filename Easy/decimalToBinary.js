/*
 * Reto #8
 * DECIMAL A BINARIO
 * Fecha publicación enunciado: 18/02/22
 * Fecha publicación resolución: 02/03/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea un programa se encargue de transformar un número 
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */

const decimalToBinary = (number) => {

    if (!Number.isInteger(number)) {
        console.log("A number is necessary")
        return
    }

    let decimal = number
    let binary = ""

    while (decimal > 0) {
        const remainder = decimal % 2
        binary = `${remainder}${binary}`
        decimal = Math.floor(decimal / 2)
    }

    console.log(`the binary number of ${number} is: ${binary}`)

}

decimalToBinary(225)