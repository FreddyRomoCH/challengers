/*
 * Crea un programa se encargue de transformar un número binario
 * a decimal sin utilizar funciones propias del lenguaje que
 * lo hagan directamente.
 */


function binaryToDecimal(binary) {
    if (!/^[01]+$/.test(binary)) {
        return 'Invalid binary number'
    }
    
    let decimalSum = 0
    let binaryArray = Array.from(String(binary), Number).reverse()

    for (let i=0 ; i<binaryArray.length; i++) {
        decimalSum += binaryArray[i] * Math.pow(2, i)
    }

    return decimalSum
}

console.log(binaryToDecimal(101)) // 5