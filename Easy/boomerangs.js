/*
 * Crea una función que retorne el número total de bumeranes de
 * un array de números enteros e imprima cada uno de ellos.
 * - Un bumerán (búmeran, boomerang) es una secuencia formada por 3 números
 *   seguidos, en el que el primero y el último son iguales, y el segundo
 *   es diferente. Por ejemplo [2, 1, 2].
 * - En el array [2, 1, 2, 3, 3, 4, 2, 4] hay 2 bumeranes ([2, 1, 2]
 *   y [4, 2, 4]).
 */

function numberOfBoomerangs(boomerang) {
    let amountOfBoomerangs = 0

    for (let i = 0; i <= boomerang.length - 1; i++) {

        if (boomerang[i] !== boomerang[i + 1] && boomerang[i] === boomerang[i + 2]) {
            amountOfBoomerangs++
        }

    }

    return amountOfBoomerangs

}

console.log(numberOfBoomerangs([2, 1, 2, 3, 3, 4, 2, 4])) // 2