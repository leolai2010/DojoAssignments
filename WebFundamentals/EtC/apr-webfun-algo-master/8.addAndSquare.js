// Write two functions. The first function will have two parameters
// your function will add those two parameters together and return the sum

// The second function will take the return value of the first function square and return that value

function add(numOne, numTwo){
    var sum = numOne + numTwo;
    console.log(sum);
    return sum;  // Your code for first function here 
}
var result = add(1,2);

function square(num){
    return num * num; 
    console.log(num); // Your code for function two here
}
square(result);

