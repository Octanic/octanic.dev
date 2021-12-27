        
    if (!this.readLanguage() && (!lang || lang!=="")){
        useNaviLanguage();
    }

    function useNaviLanguage() {
        if (navigator.language.startsWith("pt"))
            this.setLanguage("pt");

        else
            this.setLanguage("en");
    }

    function setLanguage(lang){
        if(!localStorage){
            console.log("Local storage not available.");
        }
        if (lang == "en"){
            localStorage.setItem("language", "en");
        }
        else{
            localStorage.setItem("language", "pt");
        }
        document.location.reload();
    }

    function readLanguage(){
        if(!localStorage){
            console.log("Local storage not available. Opt out Portuguese");
            return "pt";
        }
        let l = localStorage.getItem("language");
        if (!l){
            useNaviLanguage();
            return this.readLanguage();
        }
        return l;
    }

(function(){
    document.getElementById("img-lang").onclick = function(){
        let ul = document.getElementById("lang-items");
        if (ul.classList.contains("hidden")){
            ul.removeAttribute("class");
        }
        else{
            ul.classList.add("hidden");
        }
        
    };

    let ls = document.getElementsByClassName("langSelector");

    for(let i=0;i<ls.length;i++) 
    {
        ls[i].onclick = function(){
            if(!localStorage) {
                alert("LocalStorage is missing.");
            }
            else {
                setLanguage(this.dataset.language);
            }
        }
    }
    

})();