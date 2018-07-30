function Ninja(name, health, speed, strength){
    var self = this;
    var health = 100;
    var speed = 3;
    var strength = 3;
    var privateMethod
    
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
    this.sayName = function(){
        console.log("My ninja name is" + this.name + "!");
    }
    this.showStats = function(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength)
    }
    this.punch = function(Ninja){
        Ninja.health -= 5; 
        console.log(Ninja.name + " Was punched by " + this.name + " and lost 5 Health, has total health of " + Ninja.health)
    }
    this.kick = function(Ninja){
        Ninja.health = Ninja.health - (5*this.strength);
        console.log(Ninja.name + " was kicked by " + this.name + " and lost 15 health, has total health of " + Ninja.health )
    }
}
var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
// -> "Goemon was punched by Bill Gates and lost 5 Health!"
blueNinja.kick(redNinja);
// -> "Bill Gates was kicked by Goemon and lost 15 Health!"
// In this case, redNinja Bill Gates lost 15 health because blueNinja Goemon has 1 point of strength