/*
 * Crea un función que reciba un texto y retorne la vocal que más veces se repita.
 * - Ten cuidado con algunos casos especiales.
 * - Si no hay vocales podrá devolver vacío.
 */


interface Vowel {
    letter: string;
    count: number;
}

const vowels: Vowel[] = [
    {
        letter: 'a',
        count: 0
    }, 
    {
        letter: 'e',
        count: 0
    }, 
    {
        letter: 'i',
        count: 0
    }, 
    {
        letter: 'o',
        count: 0
    }, 
    {
        letter: 'u',
        count: 0
    }
];

function mostCommonvowel(text: string) {
    text = text.toLowerCase();

    for (let i = 0; i < text.length; i++) {
        switch (text[i]) {
            case 'a':
                    vowels[0].count++;
                break;
            case 'e':
                    vowels[1].count++;
                break;
            case 'i':
                    vowels[2].count++;
                break;
            case 'o':
                    vowels[3].count++;
                break;
            case 'u':
                    vowels[4].count++;
                break;
            default:
                break;
        }
    }

    return vowels.sort((a, b) => b.count - a.count)[0].letter;
}

// Test cases
console.log(mostCommonvowel('Freddy Romo')); // o