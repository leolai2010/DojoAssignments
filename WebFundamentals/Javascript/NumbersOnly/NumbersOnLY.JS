var numbersOnly = function(items){
    var placeHolder =[];
    for(var i=0; i<items.length; i++){
      if(typeof items[i] === "number"){
        placeHolder.push(items[i]);
      }
    }
    return placeHolder;
  }
  var newArray = numbersOnly([1, "apple", -3, "orange", 0.5]);
  console.log(newArray);
  // newArray is [1, -3, 0.5]