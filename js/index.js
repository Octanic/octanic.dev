(function(){
    const  ptDic = {
        mainTitle:"OLÁ, EU SOU JOÃO LUIS",
        mainFrase1:"e eu",
        mainFrase2:"coisas.",
        mainSkills:["desenvolvo","invento", "altero", "melhoro", "quebro", "conserto","automatizo","aprendo","ensino"]
    };
    const enDic = {
        mainTitle:"HI, I'M JOAO LUIS",
        mainFrase1:"and I",
        mainFrase2:"stuff.",
        mainSkills:["develop","invent", "change", "improve", "break", "fix","automate","learn","teach"]
    }

    const urlParam = new URLSearchParams(window.location.search);
    var lang = urlParam.get("lang");
    switch(lang){
        case "en":mainDic=enDic;break;
        default:mainDic=ptDic;break;
    }
    
    function sleep(ms){
        return new Promise(r=>window.setTimeout(r,ms));
    }

    async function typewriter(word,id){
        if (document.getElementById(id).textContent!==""){
            for(let i=word.length-1; i>=0;i--){
                document.getElementById(id).textContent = document.getElementById(id).textContent.substr(i);
                await sleep(50);
            }
        }
        document.getElementById(id).textContent="";

        for(let i=0;i<word.length;i++){
            document.getElementById(id).textContent+=word[i];
            await sleep(100);
        }
    }

    function setScreen(dic){
        document.getElementById("main-title").textContent=dic.mainTitle;
        document.getElementById("main-frase1").textContent=dic.mainFrase1;
        document.getElementById("main-frase2").textContent=dic.mainFrase2;
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

