// Given the following array swap the 2nd and 3rd values

var myArr = [10,20,30,5,15,25];


// Write code here to swap 2nd and 3rd values

function swap(){
    var temp = myArr[1];
    myArr[1] = myArr[2];
    myArr[2] = temp;
    console.log(myArr);
}
swap();
