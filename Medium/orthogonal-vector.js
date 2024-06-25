/*
 * Crea un programa que determine si dos vectores son ortogonales.
 * - Los dos array deben tener la misma longitud.
 * - Cada vector se podría representar como un array. Ejemplo: [1, -2]
 */

function orthogonalVector(u, v) {
    if (u.length !== v.length) return false

    return (u[0] * v[0]) + (u[1] * v[1]) === 0
}

console.log(orthogonalVector([1, -3], [-2, 4])) // false