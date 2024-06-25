/*
 * Dado un array de números enteros positivos, donde cada uno
 * representa unidades de bloques apilados, debemos calcular cuantas unidades
 * de agua quedarán atrapadas entre ellos.
 *
 * - Ejemplo: Dado el array [4, 0, 3, 6, 1, 3].
 *
 *         ⏹
 *         ⏹
 *   ⏹💧💧⏹
 *   ⏹💧⏹⏹💧⏹
 *   ⏹💧⏹⏹💧⏹
 *   ⏹💧⏹⏹⏹⏹
 *
 *   Representando bloque con ⏹︎ y agua con 💧, quedarán atrapadas 7 unidades
 *   de agua. Suponemos que existe un suelo impermeable en la parte inferior
 *   que retiene el agua.
 */

function waterContainer(blocks) {
        let water = 0
        let lengthOfArray = blocks.length
        let leftMax = new Array(lengthOfArray).fill(0)
        let rightMax = new Array(lengthOfArray).fill(0)

        leftMax[0] = blocks[0]
        for (let i = 1; i < lengthOfArray; i++) {
            leftMax[i] = Math.max(leftMax[i - 1], blocks[i])
        }

        rightMax[lengthOfArray - 1] = blocks[lengthOfArray - 1]
        for (let i = lengthOfArray - 2; i >= 0; i--) {
            rightMax[i] = Math.max(rightMax[i + 1], blocks[i])
        }

        for (let i = 0; i < lengthOfArray; i++) {
            water += Math.min(leftMax[i], rightMax[i]) - blocks[i];
        }
        
        return water;
}

console.log(waterContainer([4, 0, 3, 6, 1, 3])) // 7