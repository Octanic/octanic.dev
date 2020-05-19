(function(){
    //todo:move it to a cdn?
    ptDic = {
        headline:"Bacharel em Engenharia da Computação\n\n"+
                "Desde 2007, desenvolvendo sistemas profissionais para as mais "+
                "diversas linhas de negócio, prezando pela qualidade em todos os "+
                "pilares de consumo do meu trabalho:\n"+
                "- Experiência com o usuário\n"+
                "- Documentação\n"+
                "- Qualidade de código\n"+
                "- Segurança da Informação",
        experience:[
            {
                company: "Grupo Intercâmbio Global",
                biz:"Turismo/Intercâmbio",
                totalTime:"3 anos",
                jobs:[
                    {
                        start:"Dez/2018",
                        end:"Fev/2020",
                        position:"Gerente de sistemas",
                        description:"- Gestão de serviços de TI, concepção, análise, dimensionamento e implementação de sistemas;<br>"+
                        "- Gestão de projetos entre as divisões da empresa que envolvem tecnologia;<br>"+
                        "- Desenvolvimento de automação para tarefas que consomem tempo, aumentando a produtividade em todas as áreas da empresa.<br>"+
                        "- Suporte e manutenção a sistemas legados em PHP, bem como estudos de viabilidade para descontinuá-los."
                    },
                    {
                        start:"Mar/2017",
                        end:"Dez/2018",
                        position:"Engenheiro de sistemas",
                        description:"- Gestão de serviços de TI, concepção, análise, dimensionamento e implementação de sistemas;<br>"+
                        "- Gestão de projetos entre as divisões da empresa que envolvem tecnologia;<br>"+
                        "- Desenvolvimento de automação para tarefas que consomem tempo, aumentando a produtividade em todas as áreas da empresa.<br>"+
                        "- Suporte e manutenção a sistemas legados em PHP, bem como estudos de viabilidade para descontinuá-los."
                    }
                ]
            },
            {
                company:"Liberty Seguros (Brasil)",
                biz:"Seguradora",
                totalTime:"1 ano 3 meses",
                jobs:[
                    {
                        start:"Jan/2016",
                        end:"Mar/2017",
                        position:"Analista Consultor de Sistemas",
                        description:"Desenvolvimento, manutenção, implantação e suporte de sistemas de emissão, especificamente para sistemas de cotadores de ramos comerciais. Atuação com Confluence e JIRA, para documentações e acompanhamento de atividades; Implantação de rotinas de integração contínua através de SVN e Bamboo. Melhorias do sistema de gerenciamento interno da companhia, através de passagem de conhecimento, em conjunto com um grupo de trabalho."
                    }
                ]
            },
            {
                company:"Talent Group S/A",
                biz:"Consultoria",
                totalTime:"7 meses",
                job:[
                    {
                        start:"Mai/2015",
                        end:"Nov/2015",
                        position:"Desenvolvedor de software PL (Projeto Tempo Determinado)",
                        description:"Projeto de tempo determinado, alocado no cliente, Nestlé Co.<br>" + 
                        "Desenvolvimento e manutenção de soluções de client management.<br>"+
                        "- Concepção, desenvolvimento, deployment global usando a infraestrutura de SCCM e follow up com regiões do mundo."<br>+
                        "- Participação em reuniões de projetos com multiplas zonas,<br>"+
                        "- Organização e administração de sessões de Knowledge Transfer das soluções.<br>"+
                        "- Produção de documentação técnica e para usuário."
                    }
                ]
            },
            {
                company:"STB Student Traveu Bureau",
                biz:"Turismo/Intercâmbio",
                totalTime:"3 anos",
                job:[
                    {
                        start:"Jun/2014",
                        end:"Fev/2015",
                        position:"Analista de Sistemas",
                        description:"- Desenvolvimento e implantação de sistemas informatizados, dimensionando requisitos e funcionalidades dos sistemas,<br>"+
                        "- Especificação de arquitetura, escolhendo ferramentas de desenvolvimento, especificando programas, prestando suporte técnico ao cliente, elaborando documentação técnica.<br>"+
                        "- Estabelecer padrões, coordenar projetos, oferecer soluções para ambientes informatizados e pesquisa tecnologias em informática."
                    },
                    {
                        start:"Mar/2012",
                        end:"Jun/2014",
                        position:"Desenvolvedor",
                        description:"- Desenvolvimento de software através de especificações e requisitos, auxílio para levantamento e elaboração desses requisitos<br>"+
                        "- Implantação e homologação de sistema interno de aéreo, com integração para o e-Commerce da empresa;<br>"+
                        "- Desenvolvimento e implantação de fluxos de trabaho para o setor operacional<br>"+
                        "- Manutenção de rotinas e telas do ERP;<br>"+
                        "- Tunning de stored procedures do banco de dados;<br>"+
                        "- Criação de documentação e componentes para a equipe de desenvolvimento, e também para os usuários;<br>"+
                        "- Troubleshoot e acessoria para helpdesk e programadores para o desenvolvimento de sistemas;<br>"+
                        "- Definição de padrões e práticas de código junto aos desenvolvedores;<br>"+
                        "- Atuação como mentor de estagiários;"
                    },
                ],
            },
            {
                company:"Capta Tecnologia",
                biz:"Desenvolvimento de Software ERP (ramo de joalherias, decoração)",
                totalTime:"3 anos e 1 mês",
                job:[
                    {
                        start:"Mar/2009",
                        end:"Mar/2012",
                        position:"Analista Programador",
                        description:"- Desenvolvimento e integração de módulo da Nota Fiscal Eletrônica (federal, estadual e municipal) ao ERP<br>"+
                        "- Manutenção e criação de módulos nos sistemas utilizando Visual FoxPro 9 e C#<br>"+
                        "- Implementação de novas tecnologias, envolvendo dispositivos<br>"+
                        "- Implementação da Carta de Correção Eletrônica (CC-e) em ERP<br>"+
                        "- Manutenção e desenvolvimento de Etiquetas Zebra e Allegro<br>"+
                        "- Migração de módulos/sistemas em Visual FoxPro para VB.NET"
                    }
                ]
            },
            {
                company:"RmZNet",
                biz:"Automação Comercial",
                totalTime:"11 meses",
                job:[
                    {
                        start:"Abr/2008",
                        end:"Fev/2009",
                        position:"Programador Jr.",
                        description:"Desenvolvimento de aplicações de PDV, como:<br>"+
                                    "- Totens para apresentação de produtos e consulta de preços<br>"+
                                    "- Frente de caixa, com balança, caixa, maquineta de cartão integrada e homologada<br>"+
                                    "- Força de vendas mobile usando .NET Compact Framework, integrando com impressora bluetooth"
                    }
                ]
            },
            {
                company:"Siemens",
                biz:"Engenharia",
                totalTime:"11 meses",
                job:[
                    {
                        start:"Abr/2008",
                        end:"Fev/2009",
                        position:"Programador Trainee (estágio técnico)",
                        description:"Desenvolvimento de sistemas de apontamento de horas, automações e risk assessment, usando VBA, Excel e Access"
                    }
                ]
            }, 
            
        ],
        expertise:[
            {
                name:"teste",
                time:"5 meses"
            }
        ],
        education:[
            {
                start:"jan/2000",
                end:"dez/2003",
                school:"teste",
                course:"testar curso",
                duration:"4 anos"
            },
        ],
        certificates:[
            {
                name:"teste",
                code:"teste-202019",
                description:"certificado de teste"
            }
        ],
        languages:[
            {
                name:"Português",
                level:"nativo"
            },
            {
                name:"Inglês",
                level:"Avançado/Fluente"
            },
        ],
        goodToKnow:[
            {
                info:"comi o cu de quem tá lendo"
            },
            {
                info:"tem uma cobra na minha bota"
            },
        ]
    };
    enDic={
        
    }

    const urlParam = new URLSearchParams(window.location.search);
    var lang = urlParam.get("lang");
    var mainDic = {};
    switch(lang){
        case "en":mainDic=enDic;break;
        default:mainDic=ptDic;break;
    }

    function loadHeadline(){
        document.querySelector(".headline").innerText = mainDic.headline;
    }
    function loadExperience(){
        var elm = document.querySelector(".experience");
        if (!elm) return;
        for(let i =0; i<mainDic.experience.length; i++){
            let exp = mainDic.experience[i];
            let n = document.createElement("div");
            n.classList.add("item");
            n.innerHTML = "<h1>"+exp.position + "</h1><h2>"+exp.company+"</h2>"+
                        "<p><strong>"+exp.start+" - "+exp.end+"</strong></p>"+
                        "<p>"+exp.description+"</p>";
            
            elm.appendChild(n);
        }

    }
    function loadEducation(){
        var elm = document.querySelector(".education");
        if (!elm) return;
        for(let i =0; i<mainDic.education.length; i++){
            let ed = mainDic.education[i];
            let n = document.createElement("div");
            n.classList.add("item");
            n.innerHTML = "<h1>"+ed.course + "</h1><h2>"+ed.school+"</h2>"+
                        "<p>"+ed.start+" - "+ed.end+"<strong>"+ed.duration+"</strong></p>";
            
            elm.appendChild(n);
        }
    }
    function loadCertificates(){
        var elm = document.querySelector(".certificates");
        if (!elm) return;
        for(let i =0; i<mainDic.certificates.length; i++){
            let cer = mainDic.certificates[i];
            let n = document.createElement("div");
            n.classList.add("item");
            n.innerHTML = "<h1>"+cer.name + "</h1><h2>"+cer.school+"</h2>"+
                        cer.code!==""?"<p><strong>"+cer.code+"</strong></p>":""+
                        "<p>"+cer.description+"</p>";
            
            elm.appendChild(n);
        }
    }
    function loadExpertise(){
        var elm = document.querySelector(".expertise");
        if (!elm) return;
        for(let i =0; i<mainDic.expertise.length; i++){
            let ex = mainDic.expertise[i];
            let n = document.createElement("div");
            n.classList.add("item");
            n.innerHTML = "<strong>"+ex.name + "</strong> - "+ex.time;
            
            elm.appendChild(n);
        }
    }
    function loadLanguages(){
        var elm = document.querySelector(".languages");
        if (!elm) return;
        for(let i =0; i<mainDic.languages.length; i++){
            let ex = mainDic.languages[i];
            let n = document.createElement("div");
            n.classList.add("item");
            n.innerHTML = "<b>"+ex.name + "</b>"+ex.level;
            
            elm.appendChild(n);
        }
    }

    function loadFinal(){
        var elm = document.querySelector(".final");
        if (!elm) return;
        let n = document.createElement("ul");
        n.classList.add("item");
        for(let i =0; i<mainDic.goodToKnow.length; i++){
            let ex = mainDic.goodToKnow[i];
            n.innerHTML += "<li>"+ex.info+"</li>";            
        }
        elm.appendChild(n);
    }


    loadHeadline();
    loadExperience();
    loadEducation();
    loadCertificates();
    loadExpertise();
    loadLanguages();
    loadFinal();

})();