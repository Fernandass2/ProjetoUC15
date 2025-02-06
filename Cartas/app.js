/**
 * Estudo do array
 * Exemplo de uso em um jogo de cartas
 * @author Fernanda Batista Neris
 */

function sortear() {
    //           [0]  [1]  [2]  [3]
    let nipes = ["♥", "♦", "♣", "♠"]
    //           [0]  [1]  ...
    let faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

    // Gerando números aleatórios em JS (random)
    // Math.random() * 4 (gera 4 números: 0 1 2 3)
    // Math.floor() converte para números inteiros
    let nipeSorteado = nipes[Math.floor(Math.random() * 4)]
    let faceSorteada = faces[Math.floor(Math.random() * 13)]
    
    // console.clear()
    // console.log(faceSorteada)
    // console.log(nipeSorteado)

    // determinar a cor com base no nipe sorteado
    let cor
    if (nipeSorteado === "♥" || nipeSorteado === "♦") {
        cor = "#ff0000"
    } else {
        cor = "#000000"
    }

    // renderização do canto superior esquerdo
    document.getElementById('supEsq').innerHTML = `<div>${faceSorteada}</div> <div>${nipeSorteado}</div>`
    
    // a linha abaixo aplica o estilo de cor ao documento html identificado como 'supEsq'
    document.getElementById('supEsq').style.color = cor

    // renderização do centro
    // verificar o nipe sorteado e renderizar uma imagem ou o nipe e sua respectiva cor de acordo com a carta
    let cc = document.getElementById('centroCarta')
    if (faceSorteada === "J") {
        cc.innerHTML = `<img src="img/valete.png">`
    } else if (faceSorteada === "Q") {
        cc.innerHTML = `<img src="img/dama.png">`
    } else if (faceSorteada === "K") {
        cc.innerHTML = `<img src="img/rei.png">`
    } else {
        cc.innerHTML = `${nipeSorteado}`
        cc.style.color = cor
    }

    // renderização do canto inferior direito
    document.getElementById('infDir').innerHTML = `<div>${faceSorteada}</div> <div>${nipeSorteado}</div>`
    
    // a linha abaixo aplica o estilo de cor ao documento html identificado como 'supEsq'
    document.getElementById('infDir').style.color = cor
}