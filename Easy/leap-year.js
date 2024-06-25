/*
 * Crea una función que imprima los 30 próximos años bisiestos
 * siguientes a uno dado.
 * - Utiliza el menor número de líneas para resolver el ejercicio.
 */

function leapYears(year) {
    // Initialize a counter to keep track of how many leap years have been found.
    let count = 0
    // Start a loop that continues until 30 leap years have been found.
    while (count < 30) {
        // A year is a leap year if it is divisible by 4, but not by 100, unless it is also divisible by 400.
        const leapYear = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
        // Check if the current year is a leap year.
        if (leapYear) {
            // If the current year is a leap year, print it and increment the counter.
            console.log(year)
            count += 1
        }
        // In each iteration of the loop, increment the year by 1.
        year += 1
    }
    // The function ends when it has found and printed 30 leap years.

}

leapYears(2020)