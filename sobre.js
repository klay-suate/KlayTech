const imagens = [
"img/KlayTech logo1.png",
"img/pp.jpg",
"img/PcMesa.jpg",
"img/PcMesa1.jpg",
"img/cidadeAnoite.jpg",
"img/TogetherGreat.jpg",
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