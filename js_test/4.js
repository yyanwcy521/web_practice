function mySort() {
    var tags = new Array();//使用数组作为参数存储容器
    var a  = arguments;
    var a_le = a.length;
    for(let i = 0;i<a_le;i++){
        tags.push(a[i]);
    }
    return tags.sort(function(a,b){return a-b});
    
}
 
var result = mySort(50,11,16,32,24,99,57,100);
console.info(result);