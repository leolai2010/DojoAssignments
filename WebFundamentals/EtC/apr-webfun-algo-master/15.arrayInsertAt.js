// Write a function that takes in an array, a value, and an index.
// Insert the value into the array at the given index
// example given [1,2,3], 5, 1 you would return [1,5,2,3]
function insertion(arr,val,ind){
    arr.push(val);
    var temp = arr[ind];
    for(var i = 0; i<arr.length; i++)
    {
      if(arr[ind]==arr[i])
      {
        arr[i]=val;
      }
    arr[arr.length-1]=temp;
    }
    console.log(arr);
}
insertion([1,2,3],5,1)