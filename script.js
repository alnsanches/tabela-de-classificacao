var brasil = {
    imagem: "https://img.icons8.com/fluency/48/000000/brazil.png",
    nome: "Brasil",
    vitorias: 5,
    empates: 1,
    derrotas: 1,
    pontos: 0
};

var franca = {
    imagem: "https://img.icons8.com/color/48/000000/france.png",
    nome: "França",
    vitorias: 3,
    empates: 1,
    derrotas: 2,
    pontos: 0,
};

brasil.pontos = calculaPontos(brasil);
franca.pontos = calculaPontos(franca);


function calculaPontos(jogador) {
    var pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;
}

var jogadores = [brasil, franca];

function adicionarNovoTime() {
    var nomeTime = document.getElementById("nometime").value;
    var imagemTime = document.getElementById("imagemtime").value;

//adicionando na lista
jogadores.push({
    imagem: imagemTime,
    nome: nomeTime,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
});

exibeJogadoresNaTela(jogadores);
document.getElementById("imagemTime").value = "";
document.getElementById("nomeTime").value = "";
}

// função para exibir os times na tela
function exibeJogadoresNaTela(jogadores) {
    var elemento = "";
    for (var i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i].nome + "</td>";
        elemento += "<td><img src='" + jogadores[i].imagem + "'/></td>";
        elemento += "<td>" + jogadores[i].vitorias + "</td>";
        elemento += "<td>" + jogadores[i].empates + "</td>";
        elemento += "<td>" + jogadores[i].derrotas + "</td>";
        elemento += "<td>" + jogadores[i].pontos + "</td>";
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
        elemento += "<td><button onClick='limpar(" + i + ")'>Limpar</button></td>";
        elemento += "</tr>";
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibeJogadoresNaTela(jogadores);
}

function limpar(i) {
    jogadores[i].vitorias = 0;
    jogadores[i].derrotas = 0;
    jogadores[i].empates = 0;
    jogadores[i].pontos = 0;
    exibeJogadoresNaTela(jogadores);
}



exibeJogadoresNaTela(jogadores);

