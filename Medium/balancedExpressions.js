/*
 * Crea un programa que comprueba si los paréntesis, llaves y corchetes
 * de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cieran
 *   en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios.
 *   No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 */

const isBalanced = (expression) => {
    const stack = [];
    const symbols = {
        '(': ')',
        '{': '}',
        '[': ']',
    };
    
    for (let char of expression) {
        if (symbols[char]) {
            stack.push(char)
        }else if (Object.values(symbols).includes(char)) {
            if (char === symbols[stack[stack.length - 1]]) {
                stack.pop();
            }else{
                console.log("not balanced")
                return false;
            }
        }
    }

    console.log("is balanced")
}

isBalanced('{ a * ( c + d ) ] - 5 }'); // false
//isBalanced('{ [ a * ( c + d ) ] - 5 }'); // true