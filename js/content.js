let ptDic = {
    "titulo_whatisit":"O que é isso?",
    "titulo_howitworks": "Como funciona?",
    "titulo_why":"Por que fiz isso?",
    "titulo_result":"Resultados",
    "titulo_tech":"Tecnologias",
    "roybot" : {
        title:"ROYBOT",
        headline: "Robô de Royalties",
        whatIsIt: "",
        howItWorks: "",
        why:"",
        results:"",
        technology:[]
    },
    "katal" : {
        title:"",
        headline: "",
        whatIsIt: "",
        howItWorks: "",
        why:"",
        results:"",
        technology:[]
    },
    "hipsta" : {
        title:"",
        headline: "",
        whatIsIt: "",
        howItWorks: "",
        why:"",
        results:"",
        technology:[]
    },
    "spl" : {
        title:"",
        headline: "",
        whatIsIt: "",
        howItWorks: "",
        why:"",
        results:"",
        technology:[]
    },
    "passcalc" : {
        title:"",
        headline: "",
        whatIsIt: "",
        howItWorks: "",
        why:"",
        results:"",
        technology:[]
    },
    "epgm":{
        title:"EPG Manager",
        headline: "",
        whatIsIt: "",
        howItWorks: "",
        why:"",
        results:"",
        technology:[]
    }
};

let enDic = {
    "titulo_whatisit":"What is it?",
    "titulo_howitworks": "How it works?",
    "titulo_why":"Why did I do that?",
    "titulo_result":"Results",
    "titulo_tech":"Technologies",
    "roybot" : {
        title:"",
        headline: "",
        whatIsIt: "",
        howItWorks: "",
        why:"",
        results:"",
        technology:[]
    },
    "katal" : {
        title:"",
        headline: "",
        whatIsIt: "",
        howItWorks: "",
        why:"",
        results:"",
        technology:[]
    },
    "hipsta" : {
        title:"",
        headline: "",
        whatIsIt: "",
        howItWorks: "",
        why:"",
        results:"",
        technology:[]
    },
    "spl" : {
        title:"",
        headline: "",
        whatIsIt: "",
        howItWorks: "",
        why:"",
        results:"",
        technology:[]
    },
    "passcalc" : {
        title:"",
        headline: "",
        whatIsIt: "",
        howItWorks: "",
        why:"",
        results:"",
        technology:[]
    },
    "epgm":{
        title:"EPG Manager",
        headline: "Grid generator for EPG equipment.",
        whatIsIt: "<marquee>test</marquee>",
        howItWorks: "",
        why:"",
        results:"",
        technology:[]
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
    document.getElementById("cttech").innerHTML = project.technology;


}

setScreen();