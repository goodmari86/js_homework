
var result1 = 'number' + 3 + 3;
console.log(result1);
// Result: number33

var result2 = null + 3;
console.log(result2);
// Result: 3

var result3 = 5 && "qwerty";
console.log(result3);
// Result: qwerty

var result4 = +'40' + +'2' + "hillel";
console.log(result4);
// Result: 42hillel

var result5 = '10' - 5 === 6;
console.log(result5);
// Result: false

var result6 = true + false;
console.log(result6);
// Result: 1

var result7 = '4px' - 3;
console.log(result7);
// Result: NaN

var result8 = '4' - 3;
console.log(result8);
// Result: 1

var result9 = '6' + 3 ** 0;
console.log(result9);
// Result: 61

var result10 = 12 / '6';
console.log(result10);
// Result: 2

var result11 ='10' + (5 === 6);
console.log(result11);
// Result: 10false

var result12 = null == '';
console.log(result12);
// Result: false

var result13 = 3 ** (9 / 3);
console.log(result13);
// Result: 27

var result14 = !!'false' == !!'true';
console.log(result14);
// Result: true

var result15 = 0 || '0' && 1;
console.log(result15);
// Result: 1

var result16 = (+null == false) < 1;
console.log(result16);
// Result: false

var result17 = false && true || true;
console.log(result17);
// Result: true

var result18 = false && (false || true);
console.log(result18);
// Result: false

var result19 = (+null == false) < 1 ** 5;
console.log(result19);
// Result: false