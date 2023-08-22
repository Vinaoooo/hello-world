function solucao(min, km) {
    let valorPagar = 0;

    if (min > 20) {
        valorPagar += (20 * 50) + ((min - 20) * 30);
    } else {
        valorPagar += min * 50;
    }

    if (km > 10) {
        valorPagar += (10 * 70) + ((km - 10) * 50);
    } else {
        valorPagar += km * 70;
    }

    console.log(Math.floor(valorPagar));
}

function processData(input) {
    const x = input.split(" ");
    const min = parseFloat(x[0], 10);
    const km = parseFloat(x[1], 10);
    solucao(min, km);
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

