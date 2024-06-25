/*
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 */

const printNoCommon = (str1, str2) => {
    console.log("out1: ",findNoCommon(str1, str2))
    console.log("out2: ", findNoCommon(str2, str1))
}

const findNoCommon = (str1, str2) => {

    let out = ""

    for (const char of str1.toLowerCase()) {
        if (!str2.toLowerCase().includes(char)) {
            out += char
        }
    }

    return out

}

printNoCommon("hola", "adios") // out1: "hl", out2: "dis"