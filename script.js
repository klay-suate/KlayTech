//Animacao 
const elements = document.querySelectorAll(".fade")

window.addEventListener("scroll",()=>{elements.forEach(el=>{if (el.getBoundingClientRect().top<window.innerHeight)
{
    el.classList.add("show")
}
})
})


//Whatssap
function Whatssap(){
    window.open(
        "https://wa.me/258870718218" 
    )
}

//Formulario
function sendEmail(e){
    e.preventDefault()
    alert("Mensagem enviada!")
}