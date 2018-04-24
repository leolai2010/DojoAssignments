var winning = 
var chance =
  
function slotmachine(quarters){
  var roll = 
      for(var i = 1; i<quarters; i++)
      {
        if(roll[i] == chance[i])
          {
            quarters = winning + quarter;
            console.log("You Won a total of", quarters,"quarters !!");
          }
        else if(roll[i] != chance[i])
          {
            quarters = quarters - 1;
            console.log("Try again!");
          }
        else if(quarters === 0)
          {
            return 0;
          }
      }
}
slotmachine(5);