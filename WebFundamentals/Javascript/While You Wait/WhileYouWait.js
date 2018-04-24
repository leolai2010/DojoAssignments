function CountDownMyBirthday()
{
  var daysuntilmybirthday = 60;
  for(var i = daysuntilmybirthday;i>0; i--)
  {
      if(i>30){
        console.log(i,"days until my birthday. Such a long time... :(");
      }
      else if(i<=30 && i>5){
        console.log(i,"days until my birthday. Getting close!!");
      }
      else if(i<=5 && i !=1 && i !=0){
        console.log(i,"DAYS UNTIL MY BIRTHDAY!!!");
      }
      else if(i = 1){
        console.log(i,"DAY UNTIL MY BIRTHDAY!!!");
        console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«");
      }
  }
}
CountDownMyBirthday()
