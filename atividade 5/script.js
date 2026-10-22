function botao(){
 let numero1 = Number(prompt("fale um numero"));
 let numero2 = Number(prompt ("fale outro numero"));

  if(numero1 > numero2){
    alert("O " + numero1 + " é maior que o " +numero2);
  }else if(numero2 > numero1){
    alert("O " + numero2 + " é maior que o " +numero1);
  }else{
    alert("Os numeros sao inguais");
  }
}