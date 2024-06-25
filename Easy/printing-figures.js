/*
 * Crea un programa que dibuje un cuadrado o un triángulo con asteriscos "*".
 * - Indicaremos el tamaño del lado y si la figura a dibujar es una u otra.
 * - EXTRA: ¿Eres capaz de dibujar más figuras?
 */

function figuresPrinter(n, figure) {
    figure === 'square' ? console.log(printSquare(n)) : console.log(printTriangle(n));
}

function printSquare(n) {
    let output = "";

    for (let i=1; i<=n; i++) {
        output += '* '.repeat(n) + "\n";
    }

    return output;
}

function printTriangle(n) {
    let output = "";

    for (let i = 1; i <= n; i++) {
        output += "* ".repeat(i) + "\n";
    }

    return output;
}

figuresPrinter(5, 'square');
figuresPrinter(5, 'triangle');