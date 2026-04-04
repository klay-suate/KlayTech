const imagens = [
"img/logo2.png",
"img/pessoas.jpg",
"img/PcMesa.jpg",
"img/setup.jpg",
"img/cidadeAnoite.jpg",
"img/escritorio.jpg",
];

let index = 0;

function trocarImagem(){
    index++;

    if(index >= imagens.length){
        index = 0;
    }

    document.getElementById("slide").src = imagens[index];
}

setInterval(trocarImagem, 3500);
