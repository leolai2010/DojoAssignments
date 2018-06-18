function rBSE(str){
    var arr = [];
    function inner(newStr){
        if (newStr.length == str.length){
            arr.push(newStr);
            return;
        } else {
            var char = str[newStr.length];
            if(char != "?"){
                inner(newStr + char);
            } else {
                inner(newStr + "1");
                inner(newStr + "0");
            }
        }
    }
    inner("");
    return arr;
}
console.log(rBSE("1?0?"));
