/*var age = Number(prompt('Ваш вік', '18'));
var txt = 'років';
if(typeof age === "number" && age > 0 && age <= 100){
    
    if(age == 1 || age == 21  || age == 31 || age == 41 || age == 51 || age == 61 || age == 71 || age == 81 || age == 91){
        var txt = 'рік';   
    }
    if(age == 2 || age == 3  || age == 4 || 
        age == 22 || age == 23 || age == 24 || 
        age == 32 || age == 33 || age == 34 ||
        age == 42 || age == 43 || age == 44 ||
        age == 52 || age == 53 || age == 54 ||
        age == 62 || age == 63 || age == 64 ||
        age == 72 || age == 73 || age == 74 ||
        age == 82 || age == 83 || age == 84 ||
        age == 92 || age == 93 || age == 94){
        var txt = 'роки';   
    }
    
    console.log(age+' '+txt);
}else{
    console.log("Wrong input data");
}*/

var type = 'km';
var value = 10;
switch (type) {
    case 'km':
        console.log(value+' km = ' + (value*1000)+' meters');
        break
    case 'kg':
        console.log(value+' kg = ' + (value*1000)+' gramms');
        break;
    case 'hour':
        console.log(value+' hour = ' + (value*60)+ ' minutes');
        break;
    default:
        console.log('Undefined type');
}

