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

})();