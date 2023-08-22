function processData(input) {
    const word = input.trim();

    if (word === word.toUpperCase() || (word[0] === word[0].toLowerCase() && word.slice(1) === word.slice(1).toUpperCase())) {
        if (word === word.toUpperCase()) {
            console.log(word.toLowerCase());
        } else {
            console.log(word[0].toUpperCase() + word.slice(1).toLowerCase());
        }
    } else {
        console.log(word);
    }
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