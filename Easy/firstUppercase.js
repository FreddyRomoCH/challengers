/*
 * Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

function firstUppercase(str) {
let transformedWord = '';

    //Split str into array of words
    const arrWords = str.split(' ')

    //Iterate over the array of words
    const transformedWords = arrWords.map(word => {
        //Replace the first letter of each word to uppercase not using toUpperCase() on the whole word
        return word[0].toUpperCase() + word.slice(1)
    });

    return transformedWords.join(' ')
}

console.log(firstUppercase('hola mundo')) //! Return 'Hola Mundo'