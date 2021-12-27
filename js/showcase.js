(function(){
    const ptDic={
        title:"Aqui você encontra amostras de alguns dos meus trabalhos. Alguns não estão públicos no meu <a target='_blank' href='https://github.com/octanic' title='GitHub'>GitHub</a>.",
        legend:"Em alguns projetos, não é possível abrir o fonte para público, mas pelo menos é possível apresentar mais ou menos o que foi feito.",
        items:[
            {
                title:"ROYBOT",
                image:"roybot.png",
                description:"Automação de Royalties, para gestão, controle e envio de boletos, geração de CNAB e RPS."
            },
            {
                title:"Portal Interteck Katal",
                image:"katal.png",
                description:"Portal institucional e com painel administrativo de gestão de conteúdo para a empresa de Biotecnologia Interteck Katal."
            },
            {
                title:"Hipsta Adventures",
                image:"hipsta.png",
                description:"Jogo criado usando a biblioteca P5.js, durante o workshop Imersão GameDev, da Alura, que recebeu uma menção de honra pela equipe da Alura."
            },
            {
                title:"Sabre SPL Interpreter",
                image:"spl.svg",
                description:"Automação de leitura, interpretação e registro automático de bilhetes de passagens aéreas produzidos pelo sistema Sabre."
            },
            {
                title:"Pass Calculator",
                image:"passcalc.png",
                description:"Calculadora para compra de passes em pacotes do jogo Pokémon GO, feito em Blazor."
            },
            {
                title:"EPG Manager",
                image:"epg.png",
                description:"Gerenciador de grades de programação com base no padrão a ser lido por um EPG (Electronic Programming Guide)"
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
            },
            {
                title:"Portal Interteck Katal",
                image:"katal.png",
                description:"Company Portal with content management area for the Biotechnology company Interteck Katal."
            },
            {
                title:"Hipsta Adventures",
                image:"hipsta.png",
                description:"Platform game made with P5.js library, on Imersão GameDev workshop, hosted by Alura. This game received honorable mentions from the team."
            },
            {
                title:"Sabre SPL Interpreter",
                image:"spl.svg",
                description:"Automatic reading, interpreting, registration automation for flight tickets made on Sabre Global Distribution System."
            },
            {
                title:"Pass Calculator",
                image:"passcalc.png",
                description:"Calculator to check the best value for raid pass bundles on Pokémon GO, made with Blazor."
            },
            {
                title:"EPG Manager",
                image:"epg.png",
                description:"Manager for program schedules using the standards for reading on an EPG (Electronic Programming Guide)"
            }
        ]
    };

    var lang = readLanguage();

    var mainDic = {};
    switch(lang){
        case "en":mainDic=enDic;break;
        default:mainDic=ptDic;break;
    }


})();