
var intervalo;

function iniciarPiscar(){
    intervalo = setInterval(function(){
        piscarSemaforo();
    }, 1000)
}

function piscarSemaforo(){
    var vermelho = document.getElementById("c01");
    var amarelo = document.getElementById("c02");
    var verde = document.getElementById("c03");
    
    if(vermelho.style.backgroundColor === "red"){
        vermelho.style.backgroundColor = "";
        amarelo.style.backgroundColor = "yellow";
        verde.style.backgroundColor = "";
    }
    else if(amarelo.style.backgroundColor === "yellow"){
        amarelo.style.backgroundColor = "";
        vermelho.style.backgroundColor = "";
        verde.style.backgroundColor = "green";
    }
    else{
        vermelho.style.backgroundColor = "red";
        amarelo.style.backgroundColor = ""; 
        verde.style.backgroundColor = "";
    }
}

function desligarCores(){
    var vermelho = document.getElementById("c01");
    var amarelo = document.getElementById("c02");
    var verde = document.getElementById("c03");
    
    vermelho.style.backgroundColor = "";
    amarelo.style.backgroundColor = "";
    verde.style.backgroundColor = "";
    clearInterval(intervalo);
}

var on = document.getElementById("btnOn");
on.addEventListener("click", iniciarPiscar);

var off = document.getElementById("btnOff");
off.addEventListener("click", desligarCores);

