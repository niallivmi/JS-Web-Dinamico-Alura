const listaDeTeclas = document.querySelectorAll('.tecla')

function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play()
}

let contador  = 0

while (contador < listaDeTeclas.length) {
 
    const tecla = listaDeTeclas[contador]
    const instrumento = listaDeTeclas[contador].classList[1]

    const idAudio =  `#som_${instrumento}`

    console.log(idAudio)

    listaDeTeclas[contador].onclick = function ( ) {
        tocaSom(idAudio)
    }

    contador = contador + 1

    console.log(contador)
}