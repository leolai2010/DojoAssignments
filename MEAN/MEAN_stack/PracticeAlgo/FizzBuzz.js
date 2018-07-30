function fizzBuzz(num){
    if(num%3==0 && num%5!=0 && num >0){
        console.log("Buzz,");
    } else if(num%5==0 && num%3!=0 && num >0){
        console.log("Fizz,");
    } else if(num%3==0 && num%5==0 && num >0){
        console.log("FizzBuzz,");
    } else if(num<0){
        console.log("Parameter must be a positive number,");
    } else 
        console.log(num+",");
}
fizzBuzz(2);
fizzBuzz(6);
fizzBuzz(10);
fizzBuzz(30);
fizzBuzz(-30);