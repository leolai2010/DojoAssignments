// Write a function that takes in two arrays.
// Create a new array that zips the two arrays together
// Example: Given [1,2,3] and [10,20,40,50] you should return [1,10,2,20,3,40,50]

function zipthis(arr1,arr2){
    var arr=[];
    if(arr1.length>arr2.length){
        for(var i = 0; i<arr1.length;i++){
            arr.push(arr1[i],arr2[i]);
        }
    }
    else if (arr1.length<arr2.length){
        for(var i = 0; i<arr2.length;i++){
            arr.push(arr1[i],arr2[i]);
        }
    }
    console.log(arr);
}
zipthis([1,2,3],[10,20,30,40,50]);