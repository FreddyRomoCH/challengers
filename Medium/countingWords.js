/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

const countingWords = (text) => {

    const words = text.toLowerCase().replace(/[^\w\s]/g, '').split(" ")
    const count = {}

    words.forEach(word => {
        if (count[word]) {
            count[word]++
        }else{
            count[word] = 1
        }
    });

    for (const word in count) {
        console.log(`La palabra ${word} se repite ${count[word]} ${count[word] === 1 ? "vez" : "veces"}`)
    }

}


countingWords("texto de ejemplo donde repito muchas, muchas, pero muchas palabras")