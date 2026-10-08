let resultado
let numero

function imparpar(){
    numero = Number(prompt("Qual seu número"));
    resultado = numero % 2;
    if(resultado === 0){
        alert(" seu numero é par");
    }
    else{
        alert("seu numero é impar");
    }
}