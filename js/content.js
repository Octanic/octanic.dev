let ptDic = {
    "titulo_whatisit":"O que é isso?",
    "titulo_howitworks": "Como funciona?",
    "titulo_why":"Por que fiz isso?",
    "titulo_result":"Resultados",
    "titulo_tech":"Tecnologias",
    "roybot" : {
        title:"ROYBOT",
        headline: "Uma automação de cobrança de Royalties",
        whatIsIt: "Roybot é uma automação que usa dados de franqueados, gera um cálculo de cobrança de royalties, através de um enquadramento de regras e contratos, e envia para eles por e-mail uma cobrança via boleto registrado, usando o layout CNAB400 para registrar esses boletos.<br>Além de mostrar um detalhamento do que é devido, junto com o boleto registrado por e-mail, é gerado também um lote de RPS, para ser enviado para a prefeitura.",
        howItWorks: "Primeiro, é necessário alimentar o Roybot com dados. Para tanto, usa-se a geração de templates do Roybot para gerar uma planilha de carga.<br><img src='/showcase/img/roybot1.png' alt='Botões de geração de template'/><br>As planilhas são usadas porque esses dados vêm de outros sistemas, que não são conectados e não oferecem uma integração. Entretanto, é possível obter parte dos dados de um lado e de outro, então uma planilha que concentra esses dados é usada para alimentar uma base interna.<br>Após a carga inicial, configuram-se os parâmetros da ferramenta:<ul><li>Credenciais de e-mail</li><li>Servidor e porta de e-mail</li></ul>E também os opcionais, que vão configurar alguns comportamentos da aplicação<ul><li>Desviar o envio de e-mails</li><li>Responder para</li><li>Dia de vencimento do boleto</li><li>E-mails em cópia oculta</li><li>Dias mínimos para isenção de Royalties</li></ul><img src='/showcase/img/roybot2.png' alt='Parâmetros'/><br>Depois disso, basta gerar o modelo para preenchimento das informações de Royalties. O Roybot faz o preenchimento automático das empresas pra facilitar a extração dos dados dos outros sistemas. <br>Este passo é o que sempre se repetirá, até que haja alguma mudança de franqueados, dessa forma, basta carregar os novos franqueados na mesma planilha, junto com as regras e os contratos.<br>Depois da carga, o sistema está apto a realizar o processamento dos royalties, usando as regras já preenchidas.<br>O e-mail recebido será mais ou menos assim:<br><img src='/showcase/img/roybot3.png' alt='Exemplo de e-mail'/>",
        why:"Como não existe integração entre os sistemas, e o processo de validação das regras de royalties é um processo delicado devido a demanda do negócio, muitas vezes aconteciam divergências, então, pela atenção redobrada, era um esforço que tomava muito tempo, e mobilizava múltiplas equipes, também pela confecção dos boletos e registro dos mesmos, com o lote de serviços. <br>Com o Roybot, esse esforço foi reduzido drasticamente, para uma tarefa de poucos minutos, porque todo o cruzamento e cálculo das regras é gerado pela automação, que também produz e envia os boletos automaticamente, gerando o arquivo para registro dos boletos de lotes de serviço.",
        results:"O primeiro teste em produção será executado este mês. Mas pelos nossos testes, todo o ciclo do processo demorou 1 minuto (preenchimento dos royalties e envio dos registros de cobrança).",
        technology:[".NET Core", "WPF", "C#", "BoletoCore.NET", "NPOI", "Dapper"]
    },
    "katal" : {
        title:"Interteck Katal Portal",
        headline: "Portal institucional com recursos de gestão de conteúdo.",
        whatIsIt: "",
        howItWorks: "",
        why:"",
        results:"",
        technology:["Asp.NET Core", "MVC", ".NET Core", "CSS", "HTML"]
    },
    "hipsta" : {
        title:"Hipsta Adventures",
        headline: "Um pequeno jogo de plataforma feito em JavaScript.",
        whatIsIt: "",
        howItWorks: "",
        why:"",
        results:"",
        technology:["Javascript", "P5.js"]
    },
    "spl" : {
        title:"Sabre SPL Interpreter",
        headline: "Um interpretador para o módulo de impressão do Sabre.",
        whatIsIt: "",
        howItWorks: "",
        why:"",
        results:"",
        technology:[".NET Framework"]
    },
    "passcalc" : {
        title:"Pass Calculator",
        headline: "Uma calculadora para analisar pacotes de passes de raids para o Pokémon GO.",
        whatIsIt: "",
        howItWorks: "",
        why:"",
        results:"",
        technology:[".NET Core", "Blazor", "WebAssembly", "CSS", "HTML"]
    },
    "epgm":{
        title:"EPG Manager",
        headline: "Um gerador de grades para equipamento de EPG.",
        whatIsIt: "",
        howItWorks: "",
        why:"",
        results:"",
        technology:[".NET Framework"]
    }
};

let enDic = {
    "titulo_whatisit":"What is it?",
    "titulo_howitworks": "How it works?",
    "titulo_why":"Why did I do that?",
    "titulo_result":"Results",
    "titulo_tech":"Technologies",
    "roybot" : {
        title:"ROYBOT",
        headline: "A Royalties charging automation.",
        whatIsIt: "",
        howItWorks: "",
        why:"",
        results:"",
        technology:[".NET Core", "WPF", "C#", "BoletoCore.NET", "NPOI", "Dapper"]
    },
    "katal" : {
        title:"Interteck Katal Portal",
        headline: "Institutional portal with Content Management features.",
        whatIsIt: "",
        howItWorks: "",
        why:"",
        results:"",
        technology:["Asp.NET Core", "MVC", ".NET Core", "CSS", "HTML"]
    },
    "hipsta" : {
        title:"Hipsta Adventures",
        headline: "A small platform game made in JavaScript.",
        whatIsIt: "",
        howItWorks: "",
        why:"",
        results:"",
        technology:["Javascript", "P5.js"]
    },
    "spl" : {
        title:"Sabre SPL Interpreter",
        headline: "An interpreter for Sabre Printing Module.",
        whatIsIt: "",
        howItWorks: "",
        why:"",
        results:"",
        technology:[".NET Framework"]
    },
    "passcalc" : {
        title:"Pass Calculator",
        headline: "A calculator to analyze raid passes bundles for Pokémon GO.",
        whatIsIt: "",
        howItWorks: "",
        why:"",
        results:"",
        technology:[".NET Core", "Blazor", "WebAssembly", "CSS", "HTML"]
    },
    "epgm":{
        title:"EPG Manager",
        headline: "Grid generator for EPG equipment.",
        whatIsIt: "",
        howItWorks: "",
        why:"",
        results:"",
        technology:[".NET Framework"]
    }
};

var lang = readLanguage();
var mainDic = {};
switch(lang){
    case "en":mainDic=enDic;break;
    default: mainDic=ptDic;break;
}

var project = getProjectDic(mainDic);

function getProjectDic(dic){
    let site = document.location.search.replace("?","");
    let cdic = dic[site];
    let l = readLanguage();

    if (!cdic){
        cdic = {
            title: l==="en"?"Not available":"Indisponível",
            headline: l==="en"?"It seems there's something incorrect.":"Parece que tem algo de errado.",
            whatIsIt: l==="en"?"It's better to use the links from the Showcase section.":"É melhor usar os links da área Showcase.",
            howItWorks: l==="en"?"Just go back and try again :)":"Só volte e tente novamente :)",
            why:l==="en"?"Because if you try to access a link to a project that doesn't exist, it will not appear here.":"Porque se você tentar acessar um link de um projeto que não existe, ele não vai aparecer aqui."
        };
    }

    return cdic;
}

function setScreen(){
    document.getElementById("title").textContent=project.title;
    document.getElementById("headline").textContent=project.headline;
    document.getElementById("what").textContent = mainDic.titulo_whatisit;
    document.getElementById("how").textContent = mainDic.titulo_howitworks;
    document.getElementById("why").textContent = mainDic.titulo_why;
    document.getElementById("results").textContent = mainDic.titulo_result;
    document.getElementById("tech").textContent = mainDic.titulo_tech;

    document.getElementById("ctwhat").innerHTML = project.whatIsIt;
    document.getElementById("cthow").innerHTML = project.howItWorks;
    document.getElementById("ctwhy").innerHTML = project.why;
    document.getElementById("ctresults").innerHTML = project.results;
    for(let i=0;i<project.technology.length;i++){
        document.getElementById("cttech").innerHTML += "<div class='pill'>"+project.technology[i]+"</div>";
    }


}

setScreen();