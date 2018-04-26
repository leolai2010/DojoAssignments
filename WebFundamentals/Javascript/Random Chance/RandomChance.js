
var winning = Math.floor(Math.random()* ((100-50)+1) + 50);
var chance = Math.floor(Math.random()* ((100-1)+1) +1);
function slotmachine(quarters){
      for(var i = quarters; i>0; i--){
      var roll = Math.floor(Math.random()* ((100-1)+1) +1);
            console.log(chance);
            console.log(roll);
        if(roll == chance)
          {
            quarters = winning + quarters;
            console.log('You Won '+  winning + " quarters! You now have " + quarters + " quarters.");
          }
        else if(roll !== chance)
          {
            quarters = quarters - 1;
            console.log("You lost! Try again!");
          }
   
      }
    console.log("You have no more quarters");
    return 0;
}
slotmachine(5);