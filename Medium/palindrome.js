/*
 * Escribe una función que reciba un texto y retorne verdadero o
 * falso (Boolean) según sean o no palíndromos.
 * Un Palíndromo es una palabra o expresión que es igual si se lee
  * de izquierda a derecha que de derecha a izquierda.
 * NO se tienen en cuenta los espacios, signos de puntuación y tildes.
 * Ejemplo: Ana lleva al oso la avellana.
 */

function isPalindrome(text) {
    text = text.trim().toLowerCase().replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    const textArray = text.split("")
    let reversed = ""

    for (let i=textArray.length-1; i>=0;i--) {
        reversed = reversed.concat(textArray[i])
    }

    console.log("Original: ", text)
    console.log("Reversed: ", reversed)

    if (text === reversed) {
        return true
    }else{
        return false
    }

}

console.log(isPalindrome("Ana lleva al oso la avellana"))