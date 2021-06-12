
let numA = [];

function numberFunc() {
    let inNum1 = document.querySelector("#inNum1");
    let outResult = document.querySelector("#outResult");

    let number = Number(inNum1.value);

    if(number == "" || number <= 0 || isNaN(number)) {
        alert('Digite um número válido!!!');
        inNum1.value = "";
        inNum1.focus();
        return;
    }

    let numerosLi = "";

    if(numA.indexOf(number) >= 0) {
        alert(`Você já adicionou ${number}. Tente outro...`)
    } else {
        numA.push(number);
    }

    for(let i = 0; i < numA.length; i++) {
        numerosLi += `${i + 1}º : ${numA[i]} \n`;
    }

    outResult.textContent = numerosLi;
    inNum1.value = "";
    inNum1.focus();
}
let btnEnviar = document.querySelector("#btnEnviar");
btnEnviar.addEventListener("click", numberFunc);



function maiorNumFun() {
    let outMaior = document.querySelector("#outMaior");
    let maiorR = 0;
    for(let i = 0; i < numA.length; i++) {
        if(numA[i] > maiorR) {
            maiorR = numA[i];
        }
    }

    outMaior.textContent = `O maior número do array é ${maiorR}`;
}
let btnMaior = document.querySelector("#btnMaior");
btnMaior.addEventListener("click", maiorNumFun);
