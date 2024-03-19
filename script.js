function myIsNaN (data) {
    if (data !== data) {
       return true;
    }
   return false;
   }
   
 console.log("Is NaN: " + myIsNaN(0/0)); 

 function pad(string, symbol, symbolCount, toStart){
    if(toStart){
        return  string.padStart(symbolCount, symbol); 
    }else{
        return string.padEnd(symbolCount, symbol); 
    }
 }

 console.log(pad("qwer","+",10, false)); 

 function checkProbabilityTheory(count){
    const min = 100;
    const max = 1000;
    let evenCount = 0;
    let oddCount = 0;
    for(let i=0;i<count; i++){
      let randValue = Math.floor(Math.random() * (max - min + 1)) + min;
      if(randValue % 2 === 0){
        evenCount++;
      }else{
        oddCount++;
      }
    }
    
    console.log("Кількість згенерованих чисел: " + count);
    console.log("Парних чисел: " + evenCount);
    console.log("Не парних чисел: " + oddCount);
    console.log("Відсоток парних до не парних: " + Math.round((evenCount/count)*100) + "%" + Math.round((oddCount/count)*100));
    return true;
 }
 checkProbabilityTheory(10);

