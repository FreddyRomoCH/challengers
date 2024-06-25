/*
 * Reto #1
 * ¿ES UN ANAGRAMA?
 * Fecha publicación enunciado: 03/01/22
 * Fecha publicación resolución: 10/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.
 * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
 */

const firstWord = "Amor"
const secondWord = "Roma"

const anagram = (firstWord, secondWord) => {
    const first = firstWord.toLowerCase()
    const second = secondWord.toLowerCase()

    if (first === second) return false

    let finalWord = ""

    for (let i=first.length-1; i>=0; i--){
        const letter = first[i]
        finalWord += letter
    }

    if (finalWord == second) {
        console.log("The words: " + first + " and " + second + " are anagram")
    }else{
        console.log("The words: " + first + " and " + second + " are NOT anagram")
    }

}

anagram(firstWord, secondWord)