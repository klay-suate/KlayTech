const services = {
    basico:{
        title:"Website Básico",
        desc:"Ideal para pequenos negócios e freelancers.",
        features:[
            "Landing Page moderna",
            "Dominio próprio",
            "Design Responsivo",
            "Formulário de contacto",
            "SEO básico"
        ]
    },
    institucional:{
        title:"Website Institucional",
        desc:"Para empresas que querem presença profissional.",
        features:[
            "Dominio próprio",
            "Design Responsivo",
            "Formulário de contacto",
            "SEO básico",
            "Até 10 páginas",
            "Design personalizado",
            "Galeria",
            "SEO básico",
            "Integração redes sociais"
        ]
    },
    sistema:{
        title:"Sistema Web",
        desc:"Soluções avançadas e personalizadas.",
        features:[
            "Login e registo",
            "Dashboard",
            "Painel administrativo",
            "Base de dados",
            "Segurança "
        ]
    },
    ecommerce:{
        title:"Loja Online",
        desc:"Venda seus produtos online 24h por dia.",
        features:[
            "Catálogo de produtos",
            "Carrinho de compras",
            "Checkout",
            "Gestão de pedidos",
            "Integração de método pagamento"
        ]
    }
};

function openModal(type){
    const modal = document.getElementById("modal");
    const data = services[type];

    document.getElementById("title").innerText = data.title;
    document.getElementById("desc").innerText = data.desc;

    const list = document.getElementById("list");
    list.innerHTML="";
    data.features.forEach(item=>{
        const li=document.createElement("li");
        li.textContent="✓ "+item;
        list.appendChild(li);
    });

    modal.style.display="flex";
}

function closeModal(){
    document.getElementById("modal").style.display="none";
}

function fazerPedido(){
    window.open("https://wa.me/258870718218", target="_blank");
}