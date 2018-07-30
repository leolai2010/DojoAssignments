class Bike{
    price: number;
    max_speed: number;
    miles: number;
    constructor(price: number, max_speed: number, miles: number) {
        this.price = price;
        this.max_speed = max_speed;
        this.miles = miles;
    }
}
function displayinfo() {
    return 'Bike price: ' + this.price + 'Max Speed:' + this.max_speed + 'Miles: ' + this.miles;
}
function ride(){
    this.miles + 10;
}
function reverse() {
    this.miles - 10;
}

const CoolBike = new Bike(100, 100, 100);
console.log(CoolBike);