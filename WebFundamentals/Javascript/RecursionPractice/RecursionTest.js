function StrSubsets(Str) {
    var arr = [];
    function inner(newStr, count) {
        for(var i=0; i<str.length; i++){
            if(newStr[0] == str[i]){
                arr.push(newStr[i])
            } else if(i>count) {
                var char = Str[newStr.length];
                if(char != newStr[i]){
                    inner(newStr + char, count+1);
                } else {
                    inner(newStr, count+1);
                }
            }
        }
    }
}
console.log(StrSubsets("abc"))