function rangeprint(start, end, skipamount){
    if(end === undefined)
         {
            var temp = start; 
            start = 0;
            end = temp;
          }
      for(var i = start; i<end; i+=skipamount){
        if(skipamount>0)
          {
            console.log(i);
          }
        else if(skipamount === undefined)
        {
          skipamount = 1;
          console.log(i);
        }
      }
    }
    rangeprint(9);