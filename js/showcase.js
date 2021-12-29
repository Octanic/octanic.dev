(function(){
    const ptDic={
        title:"Aqui você encontra amostras de alguns dos meus trabalhos. Alguns não estão públicos no meu <a target='_blank' href='https://github.com/octanic' title='GitHub'>GitHub</a>.",
        legend:"Em alguns projetos, não é possível abrir o fonte para público, mas pelo menos é possível apresentar mais ou menos o que foi feito.",
        items:[
            {
                title:"ROYBOT",
                image:"roybot.png",
                description:"Automação de Royalties, para gestão, controle e envio de boletos, geração de CNAB e RPS."
                ,url:"project.html?roybot"
            },
            {
                title:"Portal Interteck Katal",
                image:"katal.png",
                description:"Portal institucional e com painel administrativo de gestão de conteúdo para a empresa de Biotecnologia Interteck Katal."
                ,url:"project.html?katal"
            },
            {
                title:"Hipsta Adventures",
                image:"hipsta.png",
                description:"Jogo criado usando a biblioteca P5.js, durante o workshop Imersão GameDev, da Alura, que recebeu uma menção de honra pela equipe da Alura."
                ,url:"project.html?hipsta"
            },
            {
                title:"Sabre SPL Interpreter",
                image:"spl.svg",
                description:"Automação de leitura, interpretação e registro automático de bilhetes de passagens aéreas produzidos pelo sistema Sabre."
                ,url:"project.html?spl"
            },
            {
                title:"Pass Calculator",
                image:"passcalc.png",
                description:"Calculadora para compra de passes em pacotes do jogo Pokémon GO, feito em Blazor."
                ,url:"project.html?passcalc"
            },
            {
                title:"EPG Manager",
                image:"epg.png",
                description:"Gerenciador de grades de programação com base no padrão a ser lido por um EPG (Electronic Programming Guide)"
                ,url:"project.html?epgm"
            }
        ]
    };
    const enDic={
        title:"Here you can find some of my work. Some of them are not public on my <a target='_blank' href='https://github.com/octanic' title='GitHub'>GitHub</a>.",
        legend:"Since it is not possible to show the source code to the public, at least I can show a little about what was done.",
        items:[
            {
                title:"ROYBOT",
                image:"roybot.png",
                description:"Royalty automation, for management, control and sending bills, along with CNAB and RPS file generation."
                ,url:"project.html?roybot"
            },
            {
                title:"Portal Interteck Katal",
                image:"katal.png",
                description:"Company Portal with content management area for the Biotechnology company Interteck Katal."
                ,url:"project.html?katal"
            },
            {
                title:"Hipsta Adventures",
                image:"hipsta.png",
                description:"Platform game made with P5.js library, on Imersão GameDev workshop, hosted by Alura. This game received honorable mentions from the team."
                ,url:"project.html?hipsta"
            },
            {
                title:"Sabre SPL Interpreter",
                image:"spl.svg",
                description:"Automatic reading, interpreting, registration automation for flight tickets made on Sabre Global Distribution System."
                ,url:"project.html?spl"
            },
            {
                title:"Pass Calculator",
                image:"passcalc.png",
                description:"Calculator to check the best value for raid pass bundles on Pokémon GO, made with Blazor."
                ,url:"project.html?passcalc"
            },
            {
                title:"EPG Manager",
                image:"epg.png",
                description:"Manager for program schedules using the standards for reading on an EPG (Electronic Programming Guide)"
                ,url:"project.html?epgm"
            }
        ]
    };

    var lang = readLanguage();

    var mainDic = {};
    switch(lang){
        case "en":mainDic=enDic;break;
        default:mainDic=ptDic;break;
    }

    function setScreen(dic){
        document.getElementById("showcase-title").innerHTML=dic.title;
        document.getElementById("showcase-legend").textContent=dic.legend;

        for(let i = 0; i<dic.items.length; i++){
            document.getElementById("showcase").appendChild(generateShowCaseItem(dic.items[i]));

        }
    }

    function generateShowCaseItem(item) {
        let div = document.createElement("div");
        div.classList.add("showcase-item");
        div.innerHTML = "<span class='item-title'>"+item.title+"</span>"+
        "<img src='/showcase/img/"+item.image+"' alt='"+item.title+"'/>"+
        "<div class='overlay'><p>"+item.description+"</p></div>";
        div.onclick = function(){
            location.href=item.url;
        }
        return div;
    }

    setScreen(mainDic);

})();