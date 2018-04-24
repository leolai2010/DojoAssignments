var array = ["James","Jill","Jane","Jack"];
function FancyArray(style,reverse){
    if(reverse === "reverse"){
      array.reverse();
    }
  for(var i = 0; i<array.length; i++){
    if(style == 1)
    {
      console.log(i, "=>", array[i]);
    }  
    else if(style == 2)
    {
      console.log(i, ",", array[i]);
    }      
    else if(style == 3)
    {
      console.log(i, "::", array[i]);
    }      
    else if(style == 4)
    {
      console.log(i, "-----", array[i]);
    }
    else
    {
      console.log(i, "->", array[i]);
    }
  }
 
}
FancyArray(1,"reverse");