let reverse = ""

const reverseChain = (text) => {

    for (let i=text.length - 1; i>=0; i--) {
        reverse += text[i]
    }

    return console.log(reverse)

}


reverseChain("Hola Mundo")