let lang = readLanguage();

(function(l){
    ptDic = {
        title: "Contato",
        name: "Nome",
        email: "E-mail",
        msg: "Mensagem",
        send: "Enviar",
        text:"Tem algo pra me falar? Deixe sua mensagem aqui!<br>Mas não se esqueça de informar seu e-mail para que eu possa entrar em contato contigo.",
        disclaimer:"Seus dados estarão seguros. Eles são somente utilizados com o propósito de estabelecer um contato entre mim e você e nada mais.<br>Clicando em Enviar, você assume que entendeu isso.",
        error: "Por favor, preencha todos os campos antes de enviar a mensagem. Obrigado!",
        success: "Foi!",
        successText: "Sua mensagem foi enviada pra mim. Eu vou ler sua mensagem o quanto antes. Obrigado!"
    };
    enDic = {
        title: "Contact",
        name: "Name",
        email: "E-mail",
        msg: "Message",
        send: "Send",
        text:"Do you want to talk to me? Leave your message here!<br>Don't forget your e-mail so I can contact you.",
        disclaimer:"You data is safe. I only use it to estabilish contact between you and me. Period.<br>By clicking Send, you assume you understand this.",
        error: "Please, fill out all fields before sending the message. Thanks!",
        success: "Done!",
        successText: "Your message has been sent. I will read it as soon as possible. Thank you!"
    };

    let mainDic = l==="pt"?ptDic:enDic;

    
    if (document.getElementById("name")){
        document.getElementById("title").textContent = mainDic.title;
        document.getElementById("name").textContent = mainDic.name;
        document.getElementById("email").textContent = mainDic.email;
        document.getElementById("msg").textContent = mainDic.msg;
        document.getElementById("send").textContent = mainDic.send;
        document.getElementById("disclaimer").innerHTML = mainDic.disclaimer;
        document.getElementById("text").innerHTML = mainDic.text;
        document.getElementById("error").innerHTML = mainDic.error;
    }
    if (document.getElementById("success")){
        document.getElementById("success").textContent = mainDic.success;
        document.getElementById("successtext").textContent = mainDic.successText;
    }

})(lang);

function checkData(){
    resetErrors();

    let n = document.getElementsByName("name")[0].value.trim();
    let e = document.getElementsByName("email")[0].value.trim();
    let m = document.getElementsByName("message")[0].value.trim();
    let error = n==="" || e==="" || m==="";
    const rx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (e !== ""){
        error = error || !(e.match(rx));
    }
    
    if (error){
        toggleError("name");
        toggleError("email", rx);
        toggleError("message");
        document.getElementById("error").className="error";
        return false;
    }
    
    return true;
}

function toggleError(elm, regx){
    const e = document.getElementsByName(elm)[0];
    let error = false;
    if (e && regx && !e.value.match(regx)) error=true;

    if (!e || e.value.trim()==="" || error){
        let nw = e.cloneNode(true);
        nw.className="hasError";
        e.parentNode.replaceChild(nw,e);
    }
    else{
        e.className="";
    }
}
function resetErrors(){
    document.getElementById("error").className="error hidden";
    document.getElementsByName("name")[0].className="";
    document.getElementsByName("email")[0].className="";
    document.getElementsByName("message")[0].className="";
    
 }