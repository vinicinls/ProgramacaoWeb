var area = document.getElementById('area');





function entrar() {

    var nome = prompt("Digite seu nome");
    var curso = prompt("Digite seu curso");
    if (nome & curso === '' || nome & curso === null) {
        alert("Ops, algo deu errado!");
        area.innerHTML = "Clique no botão para acessar...";
    } else {
        area.innerHTML = "Bem-vindo, " + nome + " ao " + " curso de " + curso;
        // Cria um botão "Sair da conta"
        var nota1 = parseFloat(prompt("Digite as nota 1"));
        var nota2 = parseFloat(prompt("Digite as nota 2"));
        var nota3 = parseFloat(prompt("Digite as nota 3"));

        
        var media = mediaTresNotas(nota1,nota2,nota3);
        media.innerHTML = media;

        if(media >= 7){
            console.log("Aprovado");
        }else{
            console.log("Reprovado")
        }

        let botaoSair = document.createElement("button");
        botaoSair.innerText = "Sair da conta";
        botaoSair.onclick = sair;
        area.appendChild(botaoSair); // Adiciona o botão ao DOM
    }
}

    function mediaTresNotas(nota1, nota2, nota3) {
        return (nota1 + nota2 + nota3) / 3;

    }

function sair() {
    alert("Até mais!");
    area.innerHTML = "Você saiu!";
}