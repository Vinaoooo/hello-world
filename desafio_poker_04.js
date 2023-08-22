function solucao(min, max, valores) {
    const autorizados = [];

    for (let i = 0; i < valores.length; i++) {
        if (valores[i] >= min && valores[i] <= max) {
            autorizados.push(valores[i]);
        }
    }

    console.log(autorizados.join(" "));
}

function processData(input) {
    const lines = input.split("\n");
    const min = parseInt(lines[0], 10);
    const max = parseInt(lines[1], 10);
    const strings = lines[2].split(" ");
    const valores = [];
    for (let i = 0; i < strings.length; i++) {
        valores.push(parseInt(strings[i], 10));
    }
    solucao(min, max, valores);
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