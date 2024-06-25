/*
 * Crea una función que ordene y retorne una matriz de números.
 * - La función recibirá un listado (por ejemplo [2, 4, 6, 8, 9]) y un parámetro
 *   adicional "Asc" o "Desc" para indicar si debe ordenarse de menor a mayor
 *   o de mayor a menor.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan
 *   automáticamente.
 */

function sortingList(arr, order) {
    if (order === 'Desc') return descSorting(arr) 
    if (order === 'Asc') return ascSorting(arr) 
}

function ascSorting(arr) {
    // Get the lowest number
    const finalArr = []

    function getMin(arr) {
        if (arr.length > 0) {
            let min = arr[0]

            for (let i=1; i<arr.length; i++) {
                if (arr[i] < arr[0]) {
                    min = arr[i]
                }

            }

            arr.splice(arr.indexOf(min), 1)

            finalArr.push(min)

            getMin(arr)

        } else {
            return arr
        }
    }

    getMin(arr)

    return finalArr
}

function descSorting(arr) {
    // Get te highest number
    const finalArr = []

    function getMax(arr) {
        if (arr.length > 0) {
            let max = arr[0]

            for (let i=1; i<arr.length; i++) {
                if (arr[i] > arr[0]) {
                    max = arr[i]
                }
            }

            arr.splice(arr.indexOf(max), 1)
            finalArr.push(max)
            getMax(arr)
        } else {
            return arr
        }
    }

    getMax(arr)

    return finalArr
}

console.log(sortingList([4, 2, 8, 6, 9], 'Desc')) // [9, 8, 6, 4, 2]