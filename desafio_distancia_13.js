function processData(input) {
    const lines = input.trim().split('\n');
    const n = parseInt(lines[0], 10);
    
    let maxX = -1001;
    let maxY = -1001;
    
    for (let i = 1; i <= n; i++) {
        const [x, y] = lines[i].split(' ').map(parseFloat);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
    }
    
    const distance = Math.sqrt(maxX ** 2 + maxY ** 2);
    console.log(distance.toFixed(10));
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