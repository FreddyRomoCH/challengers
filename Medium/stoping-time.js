/*
 * Crea una función que sume 2 números y retorne su resultado pasados
 * unos segundos.
 * - Recibirá por parámetros los 2 números a sumar y los segundos que
 *   debe tardar en finalizar su ejecución.
 * - Si el lenguaje lo soporta, deberá retornar el resultado de forma
 *   asíncrona, es decir, sin detener la ejecución del programa principal.
 *   Se podría ejecutar varias veces al mismo tiempo.
 */

function stopingTime(param1, param2, seconds) {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(param1 + param2)
        }, seconds * 1000)
    })

}

stopingTime(5, 5, 3).then(console.log) // 10 (after 3 seconds)

