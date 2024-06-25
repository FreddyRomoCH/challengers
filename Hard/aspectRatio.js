/*
 * Crea un programa que se encargue de calcular el aspect ratio de una
 * imagen a partir de una url.
 * - Url de ejemplo:
 *   https://raw.githubusercontent.com/mouredev/mouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una
 *   imagen de 1920*1080px.
 */

const imageURL = "https://raw.githubusercontent.com/mouredev/mouredev/master/mouredev_github_profile.png"

const calculateRatio = (width, height) => {
    console.log("Width: ", width)
    console.log("Height: ", height)
}

const image = new Image();

image.onload = function() {
    const width = image.naturalWidth;
    const height = image.naturalHeight;
    calculateRatio(width, height)
}

image.src = imageURL