// Using a for loop print multiples of 3 from -300 to 0 skipping -6 and -3.

function loopprint(){
    for(var i = -300; i<=0; i++){
        if(i%3 === 0 && i!= -6 && i!= -3){
            console.log(i);
        }
    }
}
loopprint();