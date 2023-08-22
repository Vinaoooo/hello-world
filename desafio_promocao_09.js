function solucao(precos) {
    const sortedPrecos = [...precos].sort((a, b) => a - b);
    const numItems = sortedPrecos.length;
    
    let totalDesconto = 0;
    
    if (numItems >= 3) {
        totalDesconto = sortedPrecos[0] / 2;
    }
    
    const totalPagar = precos.reduce((total, preco) => total + preco, 0) - totalDesconto;
    
    console.log(totalPagar);
}

function processData(input) {
    const lista = input.split(" ");
    lista.forEach((x, i, a) => a[i] = parseInt(x, 10));
    solucao(lista);
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