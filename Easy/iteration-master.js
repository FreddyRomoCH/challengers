/*
 * Quiero contar del 1 al 100 de uno en uno (imprimiendo cada uno).
 * ¿De cuántas maneras eres capaz de hacerlo?
 * Crea el código para cada una de ellas.
 */

function printIteration(a, b) {
    // forIteration(a, b)
    // whileIteration(a, b)
    // recursiveIteration(a, b)
    // arrayFromIteration(a, b)
    // arraySpreadIteration(a, b)
    doWhileIteration(a, b)
}

// FOR
function forIteration(a, b) {
    for (let i = a; i <= b; i++) {
        console.log(i)
    }
}

// While
function whileIteration(a, b) {
    let i = a

    while (i <= b) {
        console.log(i)
        i++
    }
}

// Recursive
function recursiveIteration(a, b) {
    if (a <= b) {
        console.log(a)
        recursiveIteration(a + 1, b)
    }
}

// Array.from
function arrayFromIteration(a, b) {
    Array.from({length: b}, (_, i) => i + 1).forEach((num) => console.log(num))
}

// Array spread
function arraySpreadIteration(a, b) {
    [...Array(b).keys()].map((i) => i + 1).forEach((num) => console.log(num))
}

// Do While Iteration
function doWhileIteration(a, b) {
    let i = a

    do {
        console.log(i)
        i++
    } while (i <= b)
}

printIteration(1, 100)