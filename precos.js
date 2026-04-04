const services = {
    software:{
        title:"Desenvolvimento de Software",
        desc:"Desenvolvimento de sistemas .",
        features:[
            "Desenvolvimento de sistemas personalizados",
            "Base dde dados estruturada",
            "Design Responsivo",
            "Segurança"

        ]
    },
    web:{
        title:"Desenvolvimento web",
        desc:"Para empresas que querem presença profissional.",
        features:[
            "Sistema web completo",
            "Dominio próprio",
            "Login de usuários",
            "Banco de dados",
            "Design Responsivo",
            "Formulário de contacto",
            "Segurança",
        ]
    },
    mobile:{
        title:"Aplicativos Mobile",
        desc:"Desenvolvimento de aplicativos para celulares.",
        features:[
            "Login e registo",
            "App informativo ou catálogo",
            "Banco de dados",
            "Notificações"
        ]
    },
    gestao:{
        title:"Sistemas de gestão.",
        desc:"Software que organiza, automatiza e centraliza as operações empresariais",
        features:[
            "Gestão empresarial/Clientes",
            "Controle de vendas",
            "Gestão de estoque",
            "Relatórios",
            "Gestão de pedidos"
        ]
    },
     suporte:{
        title:"Manutensão e suporte",
        desc:"Manutensão e suporte de sistemas.",
        features:[
            "Correção de erros.",
            "Suporte.",
            "Atualizações.",
            "Monitoramento."
            
        ]
    },
    automacao:{
        title:"Automação de processos",
        desc:"Automatizar tarefas repetitivas.",
        features:[
            "Respostas automáticas(WhatsApp/Email.",
            "Formulários automáticos.",
            "Chatbots inteligentes.",
            "Integração com sistemas."
            
        ]
    },
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
