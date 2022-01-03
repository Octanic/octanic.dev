(function(){
    const  ptDic = {
        mainTitle:"OLÁ, EU SOU OCTANIC",
        mainFrase1:"e eu",
        mainFrase2:"coisas.",
        mainSkills:["desenvolvo","invento", "altero", "melhoro", "quebro", "conserto","automatizo","aprendo","ensino"],
        linkedinUrl:"https://www.linkedin.com/in/joaoluisbf/?locale=pt_BR",
        resumeUrl:"resume.html",
    };
    const enDic = {
        mainTitle:"HI, I'M OCTANIC",
        mainFrase1:"and I",
        mainFrase2:"stuff.",
        mainSkills:["develop","invent", "change", "improve", "break", "fix","automate","learn","teach"],
        linkedinUrl:"https://www.linkedin.com/in/joaoluisbf/?locale=en_US"
    }

    var lang = readLanguage();

    switch(lang){
        case "en":mainDic=enDic;break;
        default:mainDic=ptDic;break;
    }
    
    async function sleep(ms){
        return await new Promise(r=>window.setTimeout(r,ms));
    }

    async function typewriter(word,id){
        if (document.getElementById(id).textContent!==""){
            for(let i=word.length-1; i>=0;i--){
                document.getElementById(id).textContent = document.getElementById(id).textContent.substring(i);
                await sleep(50);
            }
        }
        document.getElementById(id).textContent="";

        for(let i=0;i<=word.length;i++){
            document.getElementById(id).textContent=word.substring(0,i);
            await sleep(100);
        }
    }

    function setScreen(dic){
        document.getElementById("main-title").textContent=dic.mainTitle;
        document.getElementById("main-frase1").textContent=dic.mainFrase1;
        document.getElementById("main-frase2").textContent=dic.mainFrase2;
        document.getElementById("urlLinkedin").setAttribute("href",dic.linkedinUrl);
    }
    
    let i = 0;
    setScreen(mainDic);
    
    let obj = mainDic.mainSkills;
    window.setInterval(function(){
        obj = mainDic.mainSkills;

        if (i >=obj.length) i= 0;
        typewriter(obj[i++],"main-skill");

    },1800);    

})();

