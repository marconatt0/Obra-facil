const form = document.getElementById("form")
const username = document.getElementById("nome")
const telefone = document.getElementById("telefone")
const email = document.getElementById("email")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkForm();
})

email.addEventListener("blur", () => {
    checkInputEmail();
})

telefone.addEventListener("blur", () => {
    checkInputTelefone();
})

username.addEventListener("blur", () => {
    checkInputUsername();
})

function checkInputUsername(){
    const usernamevalue = username.value;

    if(usernamevalue === ""){
        errorInput(username, "Preencha o Nome de usuário!") // mostrar aviso e msg de erro...
    }
    else{
        const formItem = username.parentElement;
        formItem.className = "form-content"
    }  
}

function checkInputTelefone(){
    const telefoneValue = telefone.value;

    if(telefoneValue === ""){
        errorInput(telefone, "Preencha o Número de telefone")
    }
    else{
        const formItem = telefone.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
       errorInput(email, "Preencha o Email") 
    }
    else{
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}

function checkForm(){
    checkInputUsername();
    checkInputTelefone();
    checkInputEmail();

    const formItems = form.querySelectorAll(".form-content")

    const isValid = [...formItems].every( (item) => {
        return item.className === "form-content" //verificar se todos estão certos
    });

    if(isValid){
        alert("Mensagem enviada") //se tudo estiver certo, envia
    }
}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}