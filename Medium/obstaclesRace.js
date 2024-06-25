/*
 * Crea una función que evalúe si un/a atleta ha superado correctamente una
 * carrera de obstáculos.
 * - La función recibirá dos parámetros:
 *      - Un array que sólo puede contener String con las palabras
 *        "run" o "jump"
 *      - Un String que represente la pista y sólo puede contener "_" (suelo)
 *        o "|" (valla)
 * - La función imprimirá cómo ha finalizado la carrera:
 *      - Si el/a atleta hace "run" en "_" (suelo) y "jump" en "|" (valla)
 *        será correcto y no variará el símbolo de esa parte de la pista.
 *      - Si hace "jump" en "_" (suelo), se variará la pista por "x".
 *      - Si hace "run" en "|" (valla), se variará la pista por "/".
 * - La función retornará un Boolean que indique si ha superado la carrera.
 * Para ello tiene que realizar la opción correcta en cada tramo de la pista.
 */

function obstaclesRace(arrActions, raceTrack) {
    //Split raceTrack into array of characters
    const originalTrack = raceTrack.split('')
    const finalTrack = [] 

    //Iterate over the array of actions
    for (let i = 0; i < originalTrack.length; i++) {
        if ((arrActions[i] === 'run' && originalTrack[i] === '_') || (arrActions[i] === 'jump' && originalTrack[i] === '|')) {
            finalTrack.push(originalTrack[i])
        }else if (arrActions[i] === 'jump' && originalTrack[i] === '_') {
            finalTrack.push('x')
        }else if (arrActions[i] === 'run' && originalTrack[i] ===  '|') {
            finalTrack.push('/')
        }else{
            finalTrack.push(originalTrack[i])
        }
    }

    console.log(finalTrack.join(''))
    console.log(originalTrack.join(''))

    //Compare the finalTrack and the original raceTrack usinf join() method to convert the arrays into strings
    return finalTrack.join('') === originalTrack.join('')
    
}

console.log(obstaclesRace(['run', 'run', 'run', 'run', 'run'], '_|_|_')) // returns false