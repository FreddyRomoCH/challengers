/*
 * Crea dos funciones, una que calcule el máximo común divisor (MCD) y otra que calcule el mínimo común múltiplo (mcm) de dos números enteros.
 * - No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.
 */


function printOperations(a, b) {
    console.log(greatesCommonDivisor(a, b))
    console.log(leastCommonMultiple(a, b))
}

function leastCommonMultiple(a, b) {
    let mult = Math.max(a, b)
    let arr1 = []
    let arr2 = []

    while (mult > 0) {
        arr1.push(a * mult)
        arr2.push(b * mult)

        mult--
    }

    for (let num of arr1.reverse()) {
        if (arr2.reverse().includes(num)) {
            return num
        }
    }
}


function greatesCommonDivisor(a, b) {
    let result1 = []
    let result2 = []
    let GCDArr = []

    //GCD for A
    for (let i = 1; i <= a; i++) {
        let divisor = a/i
        let remainder = a%i

        remainder === 0 ? result1.push(Math.floor(divisor)) : null
    }

    //GCD for B
    for (let j = 1; j <= b; j++) {
        let divisor = b/j
        let remainder = b%j

        remainder === 0 ? result2.push(Math.floor(divisor)) : null
    }

    const reversedArr1 = result1.reverse()
    const reversedArr2 = result2.reverse()

    // console.log(reversedArr1)
    // console.log(reversedArr2)

    reversedArr1.map(r1 => {
        if (reversedArr2.includes(r1)) {
            GCDArr.push(r1)
        }
    })

    let GCD = Math.max(...GCDArr)

    return GCD
}

printOperations(6, 8)