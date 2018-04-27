// Write a function that takes in an array and a value
// You should add the value into index 0 (the front of the array) while maintaing the order of the rest of the array 
function addnumtobegarray(arr,num){
    arr.push(num);  
    var temp = arr[arr.length-1];
    for(var i = arr.length-1; i>0; i--){
          arr[i] = arr[i-1];
      } 
    arr[0] = temp;
    console.log(arr);
  }
  addnumtobegarray([2,3,4,5,6],1);