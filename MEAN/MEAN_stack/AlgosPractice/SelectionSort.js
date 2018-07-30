function swap(array,i,j) {
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  
  
  function selectionSort(arr) {
    var length = arr.length;
    var min;
    for (var i = 0; i < length; i++) {
      min = i;
      for (var j = i + 1; j < length; j++) {
        // if min found in the unsorted portion of the arr, save the index to be swapped
        if (arr[min] > arr[j]) {
          min = j;
        }
      }
      swap(arr,i,min);
    }
    return arr;
  }
  
  console.log(selectionSort([79, 74, 25, 14, 85, 35, 81, 69, 7, 83, 2]));
  console.log(selectionSort([1,2,3,4,5,6,7,8,9]));
  console.log(selectionSort([9,8,7,6,5,4,3,2,1]));