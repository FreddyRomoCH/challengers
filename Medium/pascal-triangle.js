/*
 * Crea una función que sea capaz de dibujar el "Triángulo de Pascal"
 * indicándole únicamente el tamaño del lado.
 *
 * - Aquí puedes ver rápidamente cómo se calcula el triángulo:
 *   https://commons.wikimedia.org/wiki/File:PascalTriangleAnimated2.gif
 */

function PascalsTriangle(sides) {

    const triangle = []

    for (let i = 0; i < sides; i++) {
        let row = []
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                row.push(1)
            }else{
                row.push(triangle[i-1][j-1] + triangle[i-1][j])
            }
        }
        triangle.push(row)
    }
    
    return triangle
}

console.log(PascalsTriangle(5));