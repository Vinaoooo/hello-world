function solucao(jogadores) {
    let jogada0 = 0;
    let jogada1 = 0;
    let nomeVencedor = "NINGUEM";
    
    for (const jogador of jogadores) {
        if (jogador.jogada === 0) {
            jogada0++;
        } else if (jogador.jogada === 1) {
            jogada1++;
        }
    }
    
    if (jogada0 === 1) {
        nomeVencedor = jogadores.find(jogador => jogador.jogada === 0).nome;
    } else if (jogada1 === 1) {
        nomeVencedor = jogadores.find(jogador => jogador.jogada === 1).nome;
    }
    
    console.log(nomeVencedor);
}

function processData(input) {
    solucao(JSON.parse(input));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});