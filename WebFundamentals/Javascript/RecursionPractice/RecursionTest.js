function rBS(str){
    var arr = [];
    function inner(newstr) {
        if (newstr.length == str.length){
            arr.push(newstr);
            return;
        } else {
            var char = str[newstr.length];
            if (char != "?") {
                inner(newstr + char);
            } else {
                inner(newstr + "0");
                inner(newstr + "1");
            }
        }
    }
    inner("");
    return arr;
}
console.log(rBS("1?0?"))