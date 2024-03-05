
function drawTriangle(lineCount, symbol) {
    
    for (let i = 1; i <= lineCount; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line = line + symbol;
        }
        console.log(line);
    }
}

drawTriangle(10,'+');


function calcSum(from, to) {
    let i = from;
    let result = 0;
    while (i <= to) {
        if(i % 3 === 0){
            result = result + i;
        }
       i++;
    }
    console.log(result);
}
calcSum(1, 100);


function pow(x, y) {
    let i = 2;
    let result = x;
    while (i <= y) {
       result = result * x;
       i++;
    }
    console.log(result);
}

pow(2,3);
