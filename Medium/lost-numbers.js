/*
 * Dado un array de enteros ordenado y sin repetidos,
 * crea una función que calcule y retorne todos los que faltan entre el mayor y el menor.
 * - Lanza un error si el array de entrada no es correcto.
 */

function lostNumbers(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
        return 'Error. Wrong array'
    }

    const min = arr[0]
    const max = arr[arr.length - 1]

    let missingNumbers = []

    for (let i=min; i < max; i++) {
        if (!arr.includes(i)) {
            missingNumbers.push(i)
        }
    }

    return missingNumbers

}

console.log(lostNumbers([1, 2, 3, 5, 8, 9])) // [4, 6, 7] 