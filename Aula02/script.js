var area = document.getElementById('area');

function entrar() {
    area.innerHTML = ""; // Limpa a área antes de adicionar novo conteúdo

    var nome = prompt("Digite seu nome");
    var curso = prompt("Digite seu curso");

    if (nome === '' || nome === null || curso === '' || curso === null) {
        alert("Ops, algo deu errado!");
        area.innerHTML = "Clique no botão para acessar...";
    } else {
        area.innerHTML = "Bem-vindo, " + nome + " ao curso de " + curso;

        var nota1 = parseFloat(prompt("Digite a nota 1"));
        var nota2 = parseFloat(prompt("Digite a nota 2"));
        var nota3 = parseFloat(prompt("Digite a nota 3"));

        if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
            alert("Digite apenas números válidos!");
            return;
        }

        var media = mediaTresNotas(nota1, nota2, nota3);
        area.innerHTML += "<br> Sua média é: " + media.toFixed(2);

        if (media >= 7) {
            area.innerHTML += "<br> Resultado: Aprovado ✅";
        } else {
            area.innerHTML += "<br> Resultado: Reprovado ❌";
        }

        let botaoSair = document.createElement("button");
        botaoSair.innerText = "Sair da conta";
        botaoSair.onclick = sair;
        botaoSair.classList.add("btn");
        area.appendChild(botaoSair);
    }
}

function mediaTresNotas(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

function sair() {
    alert("Até mais!");
    area.innerHTML = "Você saiu!";
}
