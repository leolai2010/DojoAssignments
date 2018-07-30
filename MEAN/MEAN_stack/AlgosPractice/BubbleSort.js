function swap(array,i,x) {
    var temp = array[i];
    array[i] = array[x];
    array[x] = temp;
}

function BubbleSort(array){
    var length = array.length;
    var sorted = true;
    for(var i=0;i<length; i++){
        for(var x=1; x<length; x++){
            if(array[x-1]>array[x]){
                swap(array, x-1, x);
                sorted = false;
            }
            console.log(array);
        }
        if(sorted){
            break;
        }
    }
    return array;
}
console.log(BubbleSort([90, 74, 25, 14, 85, 35, 81, 69, 7, 83, 2]));
console.log(BubbleSort([1,2,3,4,5,6,7,8,9]));
console.log(BubbleSort([9,8,7,6,5,4,3,2,1]));