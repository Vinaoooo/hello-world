function solucao(carta) {
    const manilhas = {
        Q: "J",
        J: "K",
        K: "A",
        A: "2",
        2: "3",
        3: "Q"
    };

    console.log(manilhas[carta]);
}

function processData(input) {
    solucao(input.trim());
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