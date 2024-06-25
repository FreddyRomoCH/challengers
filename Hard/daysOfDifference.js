/*
 * Crea una función que calcule y retorne cuántos días hay entre dos cadenas
 * de texto que representen fechas.
 * - Una cadena de texto que representa una fecha tiene el formato "dd/mm/yyyy".
 * - La función recibirá dos String y retornará un Int.
 * - La diferencia en días será absoluta (no importa el orden de las fechas).
 * - Si una de las dos cadenas de texto no representa una fecha correcta se
 *   lanzará una excepción.
 */

// !Code

const millisecondsPerDay = 1000 * 60 * 60 * 24 // 1 day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds

function daysOfDifference(date1, date2) {
    let dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/;

    if (!dateRegex.test(date1) || !dateRegex.test(date2)) {
        throw new Error('Invalid date');
    }

    const [day1, month1, year1] = date1.split('/')
    const [day2, month2, year2] = date2.split('/')

    const dateObj1 = new Date(year1, month1 - 1, day1) // In Javascript months are 0-indexed
    const dateObj2 = new Date(year2, month2 - 1, day2) // In Javascript months are 0-indexed

    const differenceInMilliseconds = Math.abs(dateObj1 - dateObj2) //Result is always positive regardless of the order of the dates (Math.abs())

    const diffInDays = differenceInMilliseconds / millisecondsPerDay

    return diffInDays

}

console.log(daysOfDifference('01/01/2021', '01/01/2022')) //! Return 365