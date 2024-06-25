/*
 * ¡Han anunciado un nuevo "The Legend of Zelda"!
 * Se llamará "Tears of the Kingdom" y se lanzará el 12 de mayo de 2023.
 * Pero, ¿recuerdas cuánto tiempo ha pasado entre los distintos "The Legend of Zelda" de la historia?
 * Crea un programa que calcule cuántos años y días hay entre 2 juegos de Zelda
 * que tú selecciones.
 * - Debes buscar cada uno de los títulos y su día de lanzamiento 
 *   (si no encuentras el día exacto puedes usar el mes, o incluso inventártelo)
 */

const zeldaGames = {
    'The Legend of Zelda': '21/02/1986',
    'The Adventure of Link': '14/01/1987',
    'A Link to the Past': '21/11/1991',
    'Link\'s Awakening': '06/06/1993',
    'Ocarina of Time': '21/11/1998',
    'Majora\'s Mask': '27/04/2000',
    'Oracle of Ages': '14/02/2001',
    'Oracle of Seasons': '14/02/2001',
    'Four Swords': '02/12/2002',
    'The Wind Waker': '13/12/2002',
    'Four Swords Adventures': '18/03/2004',
    'The Minish Cap': '12/11/2004',
    'Twilight Princess': '19/11/2006',
    'Phantom Hourglass': '23/06/2007',
    'Spirit Tracks': '23/12/2009',
    'Skyward Sword': '18/11/2011',
    'A Link Between Worlds': '22/11/2013',
    'Tri Force Heroes': '23/10/2015',
    'Breath of the Wild': '03/03/2017',
    'Hyrule Warriors: Age of Calamity': '20/11/2020'
}

function isValidDate(d) {
    return !(isNaN(d.getTime()));
}

function  daysBetweenGames(game1, game2) {

    if (!zeldaGames[game1] || !zeldaGames[game2]) return 'One or both games do not exist'

    const date1 = Date.parse(zeldaGames[game1].split('/').reverse().join('-'))
    const date2 = Date.parse(zeldaGames[game2].split('/').reverse().join('-'))

    const yearGame1 = new Date(date1)
    const yearGame2 = new Date(date2)

    if (!isValidDate(yearGame1) || !isValidDate(yearGame2)) return 'Invalid date' 

    const daysOfDifferenceBetweenGames =  (yearGame2 - yearGame1) / (1000 * 60 * 60 * 24)

    const yearsOfDifference = Math.floor(daysOfDifferenceBetweenGames / 365.25)
    const daysOfDifference = Math.floor(daysOfDifferenceBetweenGames % 365.25)

    return `${yearsOfDifference} years and ${daysOfDifference} days between ${game1} and ${game2}`

}

console.log(daysBetweenGames('A Link to the Past', 'Breath of the Wild')) 

