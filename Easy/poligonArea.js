/*
 * Reto #4
 * ÁREA DE UN POLÍGONO
 * Fecha publicación enunciado: 24/01/22
 * Fecha publicación resolución: 31/01/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea UNA ÚNICA FUNCIÓN (importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

const poligonArea = (w, h) => {

    //triangle: wide x High / 2
    console.log('Triangle: ' + w * h / 2)

    //rectangle: Wide x High
    console.log('Rectangle: ' + w * h)

    //square: Wide x Wide
    console.log('Square: ' + w * w)
}

poligonArea(4, 6)