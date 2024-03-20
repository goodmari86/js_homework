const car = {
    mark: "Ford",
    model: "Kuga",
    color: "white",
    getInfo: function (){
        for (let key in car){
            if(typeof car[key] !== "function"){
                console.log(key + ': ' + car[key]);
            }
        }
    }

}

car.getInfo();
car.age = 15;
car.getInfo();


const services = {
	"стрижка": 60,
	"гоління": 80,
	"Миття голови": 100,
    price: function (){
        let cost = 0;
        for (let key in services){
            if(typeof services[key] !== "function"){
                cost += services[key];
            }
        }
        console.log("загальну вартість послуг: " + cost);
    },
    minPrice: function (){
        let minPrice = 999999999;
        for (let key in services){
            if(typeof services[key] !== "function"){
                if(services[key] < minPrice) {
                    minPrice = services[key];
                }
            }
        }
        console.log("мінімальний price: " + minPrice);
    },
    maxPrice: function (){
        let maxPrice = 0;
        for (let key in services){
            if(typeof services[key] !== "function"){
                if(services[key] > maxPrice) {
                    maxPrice = services[key];
                }
            }
        }
        console.log("максимальний price: " + maxPrice);
    }
};

services.price();
services['кава'] = 500;
services.price();
services.minPrice();
services.maxPrice();

