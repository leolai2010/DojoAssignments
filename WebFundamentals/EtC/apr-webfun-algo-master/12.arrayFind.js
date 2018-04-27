// Write a function that takes in an array and a value. 
// Return true if the value is in the array, return false if the value is not in the array
function findandrecall(arr,val){
  for(var i = 0; i<arr.length; i++){
      if(val !== arr[i]){
        i++;
      }
      else if(val == arr[i]){
        return true;
      }
  }
return false;
}
var temp = findandrecall([1,2,3,4],3);
console.log(temp);



// Example call
// arrayFind([1,2,3,4,5,90], 80) --> Returns false