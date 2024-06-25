/*
 * Crea una función que reciba días, horas, minutos y segundos (como enteros)
 * y retorne su resultado en milisegundos.
 */

function timeConverter(day, hour, minute, second) {

    const milliseconds = 1000 * (second + (minute * 60) + (hour * 3600) + (day * 86400));

    return milliseconds;
}

console.log(timeConverter(1, 1, 1, 1)) // 90061000