function TellMeTime(HOUR, MINUTE, PERIOD)
{
    var DAY = "";
    var FRAME ="";
        if(MINUTE>30 && MINUTE != 15 && MINUTE != 30)
        {
            HOUR++;
            FRAME = "almost";
        }
        else if(MINUTE<30 && MINUTE !=15 && MINUTE != 30 && HOUR != 12)
        {
            FRAME = "just after";
        }
        else if(MINUTE = 15 && HOUR != 12)
        {
            FRAME = "a quarter after";
        }
        else if(MINUTE = 30 && HOUR != 12)
        {
            FRAME = "half after";
        }
        if(PERIOD == "AM" && HOUR != 12)
        {
            DAY = "morning";
        }
        else if(PERIOD == "PM"&&HOUR<6)
        {
            DAY = "afternoon";
        }
        else if(PERIOD == "PM"&&HOUR>6 && HOUR !=12)
        {
            DAY = "night";
        }
        else if(PERIOD == "PM"&&HOUR ==12)
        {
            DAY = "noon";
        }
        else if(PERIOD == "AM"&&HOUR ==12&&MINUTE==0)
        {
            DAY = "Midnight";
        }
        console.log("It's", FRAME ,HOUR, "in the",DAY);
}
      TellMeTime(12,0,"AM");