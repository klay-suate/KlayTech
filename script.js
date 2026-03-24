// Animação de scroll reveal
const elements = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        const rect = el.getBoundingClientRect().top;

        if (rect < window.innerHeight * 0.88) {
            el.classList.add("show");
        }
    });
});

// Botão WhatsApp
function WhatsApp() {
    window.open("https://wa.me/258870718218");
}

// Opcional: feedback ao enviar formulário
function sendEmail(e) {
    e.preventDefault();
    alert("Mensagem enviada!");
}
