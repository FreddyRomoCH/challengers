/*
 * Crea un función, que dado un año, indique el elemento 
 * y animal correspondiente en el ciclo sexagenario del zodíaco chino.
 * - Info: https://www.travelchinaguide.com/intro/astrology/60year-cycle.htm
 * - El ciclo sexagenario se corresponde con la combinación de los elementos
 *   madera, fuego, tierra, metal, agua y los animales rata, buey, tigre,
 *   conejo, dragón, serpiente, caballo, oveja, mono, gallo, perro, cerdo
 *   (en este orden).
 * - Cada elemento se repite dos años seguidos.
 * - El último ciclo sexagenario comenzó en 1984 (Madera Rata).
 */

const elements = ['wood', 'fire', 'earth', 'metal', 'water']
const animals = ['rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'sheep', 'monkey', 'rooster', 'dog', 'pig']

function chineseZodiacCycle(year) {
    // Calculate numbers of years since the last cycle
    const numberOfYears = year - 1984
    const findElement = Math.floor(numberOfYears / 2 % elements.length)

    const findAnimal = Math.floor(numberOfYears % animals.length)

    return `${elements[findElement].charAt(0).toUpperCase()}${elements[findElement].slice(1)} ${animals[findAnimal].charAt(0).toUpperCase()}${animals[findAnimal].slice(1)}`
}

console.log(chineseZodiacCycle(2021)) //