class Ninja {
    constructor(name, health, speed, strength) {
        this._name = name;
        this._health = 100; 
        this._speed = 3;
        this._strength = 3;
    }
    get name(){
        return this._name;
    }
    set name (name) {
        this._name = name;
    }
    get health(){
        return this._health;
    }
    set health (health) {
        this._health = health;
    }
    get speed(){
        return this._speed;
    }
    set speed (speed) {
        this._speed = speed;
    }
    get strength(){
        return this._strength;
    }
    set strength (strength) {
        this._strength = strength;
    }
    sayName() {
        console.log(this.name)
    }
    showStats() {
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength)
    } 
    drinkSake() {
        this.health += 10;
    }
}
class Sensei extends Ninja {
    constructor(name, health, speed, strength, wisdom){
        super(name, health, speed, strength)
        this.name = name; 
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    showStats() {
        super.showStats();
        console.log("Wisdom: " + this.wisdom);
    }
    speakWisdom(){
        super.drinkSake();
    }
}
// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"