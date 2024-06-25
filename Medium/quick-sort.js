/*
 * Implementa uno de los algoritmos de ordenación más famosos:
 * el "Quick Sort", creado por C.A.R. Hoare.
 * - Entender el funcionamiento de los algoritmos más utilizados de la historia
 *   Nos ayuda a mejorar nuestro conocimiento sobre ingeniería de software.
 *   Dedícale tiempo a entenderlo, no únicamente a copiar su implementación.
 * - Esta es una nueva serie de retos llamada "TOP ALGORITMOS",
 *   donde trabajaremos y entenderemos los más famosos de la historia.
 */

function quicksort(arr) {
    if (arr.length < 1) return arr

    const pivot = arr[arr.length - 1]
    const left = []
    const right = []

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quicksort(left), pivot, ...quicksort(right)]
}

console.log(quicksort([5, 2, 1, 3, 6, 4])); // [1, 2, 3, 4, 5, 6]