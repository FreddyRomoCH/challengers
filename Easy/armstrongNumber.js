/*
 * Escribe una función que calcule si un número dado es un número de Armstrong
 * (o también llamado narcisista).
 * Si no conoces qué es un número de Armstrong.
 * (1*1*1)=1  
 * (5*5*5)=125  
 * (3*3*3)=27  
 * So: 1+125+27=153  
 */

// !Code Simplified

function isArmstrongNumber(n){
    return n.toString()
        .split('')
        .map(Number)
        .reduce((sum, num) => sum + Math.pow(num, 3), 0 ) === n
}

/* !Code By Freddy
function armstrongNumber(n) {
    let numStr = n.toString()
    let numbers = numStr.split('').map(Number) // * Convert string to array of numbers
    let arrayNumbers = []

    numbers.forEach(number => {
        let pow = Math.pow(number, 3) // * 3 is the number of digits
        arrayNumbers.push(pow)
    });

    const sum = arrayNumbers.reduce((a, b) => a + b) // * Sum all numbers in array

    sum === n ? console.log(true) : console.log(false)
}

armstrongNumber(153) //! Return true
*/

console.log(isArmstrongNumber(153)) //! Return true  