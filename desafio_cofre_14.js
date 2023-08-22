function processData(input) {
    const linhas = input.trim().split('\n');
    const senhaCorreta = linhas[0];
    const tentativa = linhas[1];
    
    let indiceSenha = 0;
    
    for (let i = 0; i < tentativa.length; i++) {
        if (tentativa[i] === senhaCorreta[indiceSenha]) {
            indiceSenha++;
            if (indiceSenha === senhaCorreta.length) {
                console.log("SIM");
                return;
            }
        }
    }
    
    console.log("NAO");
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