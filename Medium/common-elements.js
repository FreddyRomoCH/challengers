/*
 * Crea una función que reciba dos array, un booleano y retorne un array.
 * - Si el booleano es verdadero buscará y retornará los elementos comunes de los dos array.
 * - Si el booleano es falso buscará y retornará los elementos no comunes de los dos array.
 * - No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.
 */

function commonElements(arr1, arr2, boolean) {
    let finalArr = []

    if (boolean === true) {
        arr1.map(e1 => arr2.map(e2 => {
                if (e1 === e2) {
                    finalArr.push(e1)
                }
            })
        )
    }else if (boolean === false) {
        arr1.map(e1 => {
            if (!arr2.includes(e1)) {
                finalArr.push(e1)
            }
        })

        arr2.map(e2 => {
            if (!arr1.includes(e2)) {
                finalArr.push(e2)
            }
        })
    }

    return [...new Set(finalArr)]
}

console.log(commonElements([1, 2, 3, 4, 5], [3, 4, 5, 6, 7], true)) // returns [3, 4, 5]
console.log(commonElements([1, 2, 3, 4, 5], [3, 4, 5, 6, 7], false)) // returns [1, 2, 6, 7]