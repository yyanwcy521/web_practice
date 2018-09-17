function exp(num){
    var NUM = new Number(num);
    var str = NUM.toString();
    var sum = 0;
    var arr = [];
    for(var i = 0; i< str.length ;i ++){
        sum += Number(str[i]);
           }
    if( num%sum === 0 ){
        return "yes";
    }
    else{
        return "NO";
    }
}
console.log(exp(11));
