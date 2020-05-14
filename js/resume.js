(function(){
    //todo:move it to a cdn?
    ptDic = {
        headline:"aaaaa",
        experience:[
            {
                start:"",
                end:"",
                company:"",
                position:"",
                job:""
            },
        ],
        expertise:[
            {
                name:"",
                time:""
            }
        ],
        education:[
            {
                start:"",
                end:"",
                school:"",
                course:"",
                duration:""
            },
        ],
        certificates:[
            {
                name:"",
                code:"",
                description:""
            }
        ],
        languages:[
            {
                name:"",
                level:""
            },
        ],
        goodToKnow:[
            {
                info:""
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
        document.querySelector(".headline p").innerText = mainDic.headline;
    }
    function loadExperience(){

    }
    function loadEducation(){

    }
    function 


    loadHeadline();
})();