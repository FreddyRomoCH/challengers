/*
 * Crea un programa que calcule quien gana más partidas al piedra, papel, tijera.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "R" (piedra), "P" (papel) o "S" (tijera).
 * - Ejemplo. Entrada: [("R","S"), ("S","R"), ("P","S")]. Resultado: "Player 2".
 */

function rockScissorsPaper(match) {
    scores = {
        player1: 0,
        player2: 0,
    }

    match.forEach((game) => {
        const result = `${game[0]}${game[1]}`
        const rules = { 
            "RS": "player1", 
            "SP": "player1", 
            "PR": "player1", 
            "SR": "player2", 
            "PS": "player2", 
            "RP": "player2" 
        }

        if (rules[result]) {
            scores[rules[result]] += 1
        } else {
            scores.player1 += 1
            scores.player2 += 1
        }

    })

    if (scores.player1 > scores.player2) {
        return "Player 1"
    } else if (scores.player2 > scores.player1) {
        return "Player 2"
    } else {
        return "Tie"
    }
}

console.log(rockScissorsPaper([["R", "S"], ["S", "R"], ["P", "S"]])) // Player 2