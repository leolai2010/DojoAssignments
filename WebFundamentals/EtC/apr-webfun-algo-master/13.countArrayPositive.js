// Write a function that returns the number of positive values in the array
function onlyPos(arr){
    var count = 0;
    for(var i = 0; i<arr.length; i++){
        if(arr[i]>0){
            count++;
        }
    }
  console.log(count);
}
onlyPos([1,3,-3,-5,7,-7]);