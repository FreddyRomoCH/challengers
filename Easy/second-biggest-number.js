/*
 * Dado un listado de números, encuentra el SEGUNDO más grande
 */

//Define a function that takes an array of numbers as an argument.
function secondBiggestNumber(arrNumbers) {
    //Check if the array has at least two elements. If not, return an appropriate message or value

    if (arrNumbers.length < 2) {
        return 'The array must have at least two elements'
    }

    //Initialize two variables, max and secondMax, to hold the largest and second largest numbers. 
    //You can set them to Number.NEGATIVE_INFINITY at the start, which is smaller than any other number.
    let max = Number.NEGATIVE_INFINITY
    let secondMax = Number.NEGATIVE_INFINITY

    // Iterate over the array of numbers.
    // For each number, check if it's greater than max. If it is, update secondMax to the current max, and update max to the current number.
    // If it's not greater than max, but it's greater than secondMax, update secondMax to the current number.
    arrNumbers.forEach((num) => {
        if (num > max) {
            secondMax = max
            max = num
        } else if (num > secondMax) {
            secondMax = num
        }
    })

    //After the loop, secondMax will hold the second largest number in the array. Return secondMax from the function.

    return secondMax

}

console.log(secondBiggestNumber([1, 2, 4, 3, 5])) //Expected output: 4