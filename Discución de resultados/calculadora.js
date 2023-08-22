window.addEventListener("load", init);


function sumar (){
    var Valor1 = document.getElementById("numero01").valueAsNumber;
    var Valor2 = document.getElementById("numero02").valueAsNumber;
    var total = Valor1 + Valor2;

    alert( total); 
}
function restar(){
    var Valor1 = document.getElementById("numero01").valueAsNumber;
    var Valor2 = document.getElementById("numero02").valueAsNumber;
    var total = Valor1 - Valor2;
    Resultado.valueAsNumber = total;

}
function multiplicar(){
    var Valor1 = document.getElementById("numero01").valueAsNumber;
    var Valor2 = document.getElementById("numero02").valueAsNumber;
    var total = Valor1 * Valor2;
    Resultado.valueAsNumber = total;
}
function dividir(){
    var Valor1 = document.getElementById("numero01").valueAsNumber;
    var Valor2 = document.getElementById("numero02").valueAsNumber;
    var total = Valor1 / Valor2;
    Resultado.valueAsNumber = total;
}
function residuo(){
    var Valor1 = document.getElementById("numero01").valueAsNumber;
    var Valor2 = document.getElementById("numero02").valueAsNumber;
    var total = Valor1 % Valor2;
    Resultado.valueAsNumber = total;
}
function inversa(){
    var Valor1 = document.getElementById("numero01").valueAsNumber;
    var Valor2 = document.getElementById("numero02").valueAsNumber;
    var total = Valor1 % Valor2;
    Resultado.valueAsNumber = total;
}
function potenciacion(){
    var Valor1 = document.getElementById("numero01").valueAsNumber;
    var Valor2 = document.getElementById("numero02").valueAsNumber;
    var total = Math.pow(Valor1, Valor2);
    Resultado.valueAsNumber = total;
}
function raiz(){
    var Valor1 = document.getElementById("numero01").valueAsNumber;
    var Valor2 = document.getElementById("numero02").valueAsNumber;
    var total = Math.sqrt(Valor1, Valor2);
    Resultado.valueAsNumber = total;
}

function init(){
    var Sumaboton = document.getElementById("suma");
    var Restaboton = document.getElementById("resta");
    var Multiplicacionboton = document.getElementById("multiplicacion");
    var Divisionboton = document.getElementById("division");

    var Residuoboton = document.getElementById("residuo");
    var Inversaboton = document.getElementById("inversa");
    var Potenciacionboton = document.getElementById("potenciacion");
    var Raizboton = document.getElementById("raiz");

    Sumaboton.addEventListener("click", sumar);
    Restaboton.addEventListener("click", restar);
    Multiplicacionboton.addEventListener("click", multiplicar);
    Divisionboton.addEventListener("click", dividir);
    Residuoboton.addEventListener("click", residuo);
    Inversaboton.addEventListener("click", inversa);
    Potenciacionboton.addEventListener("click", potenciacion);
    Raizboton.addEventListener("click", raiz);
    }
