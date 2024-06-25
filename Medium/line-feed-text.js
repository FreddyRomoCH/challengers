/*
 * Crea una función que reciba un texto y muestre cada palabra en una línea,
 * formando un marco rectangular de asteriscos.
 * - ¿Qué te parece el reto? Se vería así:
 *   **********
 *   * ¿Qué   *
 *   * te     *
 *   * parece *
 *   * el     *
 *   * reto?  *
 *   **********
 */

function lineFeedText(text) {
    //Split the input string into words.
    const words = text.split(" ")
    //Determine the length of the longest word to know the width of the frame.
    const maxLength = Math.max(...words.map(word => word.length))
    //Create the top and bottom borders of the frame.
    const border = '*'.repeat(maxLength + 4)
    //For each word, create a line that starts and ends with an asterisk, contains the word, and is filled with spaces up to the width of the frame.
    const lines = words.map(word => `* ${word}${' '.repeat(maxLength - word.length)} *`)
    
    //Join all lines into a single string with line breaks between them.
    return [border, ...lines, border].join('\n')
}

console.log(lineFeedText('¿Qué te parece el reto?'))