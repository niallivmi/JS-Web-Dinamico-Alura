const listaDeTeclas = document.querySelectorAll('.tecla')

function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play()
}

//Reproduzir sons, alterar ação dos botões
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
 
    const tecla = listaDeTeclas[contador]
    const instrumento = listaDeTeclas[contador].classList[1]
    const idAudio =  `#som_${instrumento}`

    tecla.onclick = function () {
            tocaSom(idAudio)
    }

    tecla.onkeydown = function (e) {
        if (e.code === 'Space' ||  e.code === 'Enter'){
        tecla.classList.add('ativa')
        } 
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa')
    }   

}

