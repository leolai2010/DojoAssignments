function allValidParens(number){
    var arr = [];
    function inner(newStr, numOpen, numClosed){
        if (numOpen == numClosed && numOpen == number){
            arr.push(newStr);
        }
        if(numOpen > numClosed){
            if(numOpen < number){
                inner(newStr+"(", numOpen+1, numClosed);
                inner(newStr+")", numOpen, numClosed+1);
            }else if (numOpen == number){
                inner(newStr+")", numOpen, numClosed+1);
            }
        }else if (numOpen == numClosed){
            inner(newStr+ "(", numOpen+1, numClosed);
        }
    }
    inner("(", 1 , 0);
    return arr;
}
console.log(allValidParens(3));
