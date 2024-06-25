/*
 * Crea un programa que calcule el daño de un ataque durante
 * una batalla Pokémon.
 * - La fórmula será la siguiente: daño = 50 * (ataque / defensa) * efectividad
 * - Efectividad: x2 (súper efectivo), x1 (neutral), x0.5 (no es muy efectivo)
 * - Sólo hay 4 tipos de Pokémon: Agua, Fuego, Planta y Eléctrico 
 *   (buscar su efectividad)
 * - El programa recibe los siguientes parámetros:
 *  - Tipo del Pokémon atacante.
 *  - Tipo del Pokémon defensor.
 *  - Ataque: Entre 1 y 100.
 *  - Defensa: Entre 1 y 100.
 */

const types = {
    water: {
        superEffective: ['fire'],
        notVeryEffective: ['plant'],
        neutral: ['electric', 'water']
    },
    fire: {
        superEffective: ['plant'],
        notVeryEffective: ['water'],
        neutral: ['electric', 'fire']
    },
    plant: {
        superEffective: ['water'],
        notVeryEffective: ['fire'],
        neutral: ['electric', 'plant']
    },
    electric: {
        superEffective: ['water'],
        notVeryEffective: ['plant'],
        neutral: ['fire', 'electric']
    }
}

function pokemonBattle(pokemonAtack, pokemonDefense) {
    const attackType = pokemonAtack[0]
    const attackDamage = pokemonAtack[1]
    const defenseType = pokemonDefense[0]
    const defenseDefense = pokemonDefense[1]

    // Efectividad: x2 (súper efectivo), x1 (neutral), x0.5 (no es muy efectivo)
    let effectivity = 0

    if (types[attackType].superEffective.includes(defenseType)) effectivity = 2
    if (types[attackType].notVeryEffective.includes(defenseType)) effectivity = 0.5
    if (types[attackType].neutral.includes(defenseType)) effectivity = 1

    const damage = 50 * (attackDamage / defenseDefense) * effectivity

    return Math.floor(damage)

}

console.log(pokemonBattle(['water', 50], ['plant', 120]))