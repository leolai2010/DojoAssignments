function ForAFewBillion30Days(){
    var penny = 0.01;
    for(var i = 1; i< 31; i++){
      penny = penny * 2;
    }
    console.log("After 30 days, the servant would have $", penny);
  }
  ForAFewBillion30Days();
  
  function WhenWill10k(){
    var day = 1;
    for(var penny = 0.01; penny<=10001; penny = penny *2){
      console.log(penny)
      day++
      console.log(day);
    }
     console.log("On day",day, "the Servant will have $10,000!");
  }
  WhenWill10k();
  function WhenWill1bil(){
    var day = 1;
    for(var penny = 0.01; penny<=1000000001; penny = penny *2){
      console.log(penny)
      day++
      console.log(day);
    }
    console.log("On day",day, "the Servant will have $1,000,000,000!");
  }
  WhenWill1bil();
  function WhenWillinf(){
    var day = 1;
    for(var penny = 0.01; penny<= Infinity; penny = penny *2){
      console.log(penny)
      day++
      console.log(day);
    }
    console.log("On day",day, "the Servant will have infinity amount of $$");
  }
  WhenWillinf();