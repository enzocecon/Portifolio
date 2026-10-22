function site(){
    let nome;
    let mostrar;

    nome = prompt("Qual seu nome?");
    mostrar = document.getElementById('mostrar');

    mostrar.innerHTML = `<p> Olá ${nome}! Seja bem vindo </p>`;
}