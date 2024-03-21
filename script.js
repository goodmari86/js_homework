
function myBlend(arr){
    return arr.sort(() => Math.random() - 0.5);

}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
console.log(myBlend(arr));


const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 2',
                            type: 'subSubSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};



function findValueByKey(companyName){
    let resultList = [];
    company.clients.forEach((c) => {
        if(c.name === companyName){
           resultList.push({
               name: c.name,
               type: c.type,
               uses: c.uses,
               sells: c.sells}); 
        }
        if(c.partners){
          findPartners(c.partners);
        }
    });

    function findPartners(partners){
        if(partners && Array.isArray(partners)){
            partners.forEach((p) => {
                if(p.name === companyName){
                    resultList.push({
                        name: p.name,
                        type: p.type,
                        uses: p.uses,
                        sells: p.sells}); 
                 }
                 if(p.partners){
                   findPartners(p.partners);
                 }
            })
        }
    }

    return resultList;

}
console.log(findValueByKey("Клієнт 2"));