/*
 * Este es un reto especial por Halloween.
 * Deberemos crear un programa al que le indiquemos si queremos realizar "Truco o Trato" y un listado (array) de personas con las siguientes propiedades:
 * - Nombre de la niña o niño
 * - Edad
 * - Altura en centímetros
 *
 * Si las personas han pedido truco, el programa retornará sustos (aleatorios)
 * siguiendo estos criterios:
 * - Un susto por cada 2 letras del nombre por persona
 * - Dos sustos por cada edad que sea un número par
 * - Tres sustos por cada 100 cm de altura entre todas las personas
 * - Sustos: 🎃 👻 💀 🕷 🕸 🦇
 *
 * Si las personas han pedido trato, el programa retornará dulces (aleatorios)
 * siguiendo estos criterios:
 * - Un dulce por cada letra de nombre
 * - Un dulce por cada 3 años cumplidos hasta un máximo de 10 años por persona
 * - Dos dulces por cada 50 cm de altura hasta un máximo de 150 cm por persona
 * - Dulces: 🍰 🍬 🍡 🍭 🍪 🍫 🧁 🍩
 * - En caso contrario retornará un error.
 */

const people = [
    {
        name: "Alice",
        age: 12,
        height: 150
    },
    {
        name: "Bob",
        age: 7,
        height: 120
    },
    {
        name: "Charlie",
        age: 10,
        height: 130
    },
]

const ReGexjustLetters = /[^a-zA-Z]/g

function getRandom(arr){
    let randomIndex = Math.floor(Math.random() * arr.length)
    let randomElement = arr[randomIndex]

    return randomElement
}

function getTrick(people) {
    const scaresByNames = []
    const scaresByAge = []
    const scaresByHeight = []
    const totalScares = []
    const scares = ["🎃", "👻", "💀", "🕷", "🕸", "🦇"]
    const MAX_HEIGHT_PER_PERSON = 100

    people.forEach((person) => {
        //Un susto por cada 2 letras del nombre por persona
        const letterByName = person.name.replace(ReGexjustLetters, '').length
        const numberOfScares = Math.floor(letterByName / 2)

        for (let i = 0; i < numberOfScares; i++) {
            const RandomElement = getRandom(scares)
            scaresByNames.push(RandomElement)
        }

        //Dos sustos por cada edad que sea un número par
        let isEven = person.age % 2 === 0
        if (isEven) {
            for (let i = 0; i < 2; i++) {
                const RandomElement = getRandom(scares)
                scaresByAge.push(RandomElement)
            }
        }
    })

    //Tres sustos por cada 100 cm de altura entre todas las personas
    const sumOfHeight = people.reduce((acc, person) => person.height + acc, 0)
    const numberOfScaresByHeight = Math.floor(sumOfHeight / MAX_HEIGHT_PER_PERSON) * people.length

    for (let i = 0; i < numberOfScaresByHeight; i++) {
        const RandomElement = getRandom(scares)
        scaresByHeight.push(RandomElement)
    }

    totalScares.push(...scaresByNames, ...scaresByAge, ...scaresByHeight)

    return totalScares
}

function getTreat(people) {
    const sweets = ["🍰", "🍬", "🍡", "🍭", "🍪", "🍫", "🧁", "🍩"]
    const sweetsByNames = []
    const sweetsByAge = []
    const sweetsByHeight = []
    const totalSweets = []
    const HEIGHT_INCREMENT = 50
    const AGE_INCREMENT = 3
    const MAX_HEIGHT = 150
    const SWEETS_PER_HEIGHT = 2
    let totalOfLetters = 0

    //Un dulce por cada letra de nombre
    people.forEach((person) => {
        const letterByName = person.name.replace(ReGexjustLetters, '').length
        totalOfLetters += letterByName

        //Un dulce por cada 3 años cumplidos hasta un máximo de 10 años por persona
        let accumulatedAge = AGE_INCREMENT
        while (accumulatedAge <= 10 && accumulatedAge <= person.age) {
            const totalRandom = getRandom(sweets)
            sweetsByAge.push(totalRandom)
            accumulatedAge += AGE_INCREMENT
        }

        //Dos dulces por cada 50 cm de altura hasta un máximo de 150 cm por persona
        let accumulatedHeight = HEIGHT_INCREMENT
        while (accumulatedHeight <= MAX_HEIGHT && accumulatedHeight <= person.height) {

            for (let i = 0; i < SWEETS_PER_HEIGHT; i++) {
                const totalRandom = getRandom(sweets)
                sweetsByHeight.push(totalRandom)
            }

            accumulatedHeight += HEIGHT_INCREMENT
        }
    })

    for (let i = 0; i < totalOfLetters; i++) { 
        const totalRandom = getRandom(sweets)
        sweetsByNames.push(totalRandom)
    }

    totalSweets.push(...sweetsByNames, ...sweetsByAge, ...sweetsByHeight)

    return totalSweets

}

function trickOrTreat(trickOrTreat, people) {

    if (trickOrTreat === "trick") {
        return getTrick(people)
    } else if (trickOrTreat === "treat") {
        return getTreat(people)
    } else {
        throw new Error("Invalid Input. Expected 'trick' or 'treat'")
    }

}

console.log(trickOrTreat("treat", people))

