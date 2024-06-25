/*
 * Simula el funcionamiento de una máquina expendedora creando una operación que reciba dinero (array de monedas) y un número que indique la selección del producto.
 * - El programa retornará el nombre del producto y un array con el dinero de vuelta (con el menor número de monedas).
 * - Si el dinero es insuficiente o el número de producto no existe, deberá indicarse con un mensaje y retornar todas las monedas.
 * - Si no hay dinero de vuelta, el array se retornará vacío.
 * - Para que resulte más simple, trabajaremos en céntimos con monedas de 5, 10, 50, 100 y 200.
 * - Debemos controlar que las monedas enviadas estén dentro de las soportadas.
 */

const products = [
    {
        name: 'Coca-Cola',
        price: 200,
        selection: 1
    },
    {
        name: 'Water',
        price: 100,
        selection: 3
    },
    {
        name: 'Pepsi',
        price: 150,
        selection: 5
    },
    {
        name: 'Fanta',
        price: 180,
        selection: 7
    
    }
]

const acceptedMoney = [5, 10, 50, 100, 200]

function vendingMachine(arrCoins, numProduct) {
    // Check out if coins are accepted
    const isAccepted = arrCoins.every(coin => acceptedMoney.includes(coin))

    if (!isAccepted) return `Invalid coins.\nThis is your money back: ${arrCoins}`

    // Check out if number of product exists
    const productExist = products.find(prod => prod.selection === numProduct)
    
    if (!productExist) return `Product not found.\nThis is your money back: ${arrCoins}`

    // Sum up the total coins
    const totalCoins = arrCoins.reduce((acc, coins) => acc + coins, 0)

    // Check if there is not enough money
    if (totalCoins < productExist.price) return `Insufficient money.\nThis is your money back: ${arrCoins}`

    // Check if there is no money back
    if (totalCoins === productExist.price) return `You have bought a ${productExist.name}.\nThere is no money back.`

    // Check if there is money back
    if (totalCoins > productExist.price) {
        let moneyChange = totalCoins - productExist.price
        const arrMoneyChange = []

        // Sort acceptedMoney in descending order
        const sortedAcceptedMoney = [...acceptedMoney].sort((a, b) => b - a )

        for (let coin of sortedAcceptedMoney) {
            while (moneyChange >= coin) {
                moneyChange -= coin
                arrMoneyChange.push(coin)
            }
        }

        return `You bought a ${productExist.name}.\nThis is your money back: ${arrMoneyChange}`
    }
}

console.log(vendingMachine([200, 200, 100], 5))